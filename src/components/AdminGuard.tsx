import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type State = "loading" | "anon" | "not-admin" | "ok";

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    let alive = true;
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { if (alive) setState("anon"); return; }
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!alive) return;
      setState(!error && data ? "ok" : "not-admin");
    };
    check();
    const { data: sub } = supabase.auth.onAuthStateChange(() => check());
    return () => { alive = false; sub.subscription.unsubscribe(); };
  }, []);

  if (state === "loading") {
    return <div style={{ background: "#0d0d0d", minHeight: "100vh", color: "#b38f4a" }}
      className="flex items-center justify-center text-xs uppercase tracking-widest">Verifying access…</div>;
  }
  if (state === "anon") return <Navigate to="/auth" replace />;
  if (state === "not-admin") {
    return <div style={{ background: "#0d0d0d", minHeight: "100vh" }} className="flex flex-col items-center justify-center px-6 text-center">
      <p style={{ color: "#b38f4a", letterSpacing: 3 }} className="uppercase text-xs mb-3">Restricted</p>
      <h1 style={{ color: "#fff", fontFamily: "Georgia, serif" }} className="text-3xl font-bold mb-4">Admin access required</h1>
      <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-sm max-w-md">
        Your account does not have the <code>admin</code> role. Ask an existing admin to grant it, then refresh.
      </p>
      <button onClick={() => supabase.auth.signOut()}
        className="mt-6 px-6 py-2 text-xs uppercase tracking-widest"
        style={{ border: "1px solid #b38f4a", color: "#b38f4a" }}>Sign out</button>
    </div>;
  }
  return <>{children}</>;
};

export default AdminGuard;