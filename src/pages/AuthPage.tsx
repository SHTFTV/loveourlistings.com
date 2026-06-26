import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const GOLD = "#b38f4a";
const BG = "#0d0d0d";
const PANEL = "#161616";

const AuthPage = () => {
  const nav = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    document.title = "Sign In · Love Our Listings";
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) nav("/admin/image-health", { replace: true });
    });
  }, [nav]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/auth" },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      nav("/admin/image-health", { replace: true });
    } catch (e: any) {
      setError(e.message || "Authentication failed");
    } finally { setBusy(false); }
  };

  return (
    <div style={{ background: BG, minHeight: "100vh" }} className="flex items-center justify-center px-6">
      <form onSubmit={submit} style={{ background: PANEL, border: `1px solid ${GOLD}33` }} className="w-full max-w-md p-8">
        <p style={{ color: GOLD, letterSpacing: 3, fontSize: 11 }} className="uppercase mb-2">Admin · {mode === "signin" ? "Sign In" : "Sign Up"}</p>
        <h1 style={{ color: "#fff", fontFamily: "Georgia, serif" }} className="text-3xl font-bold mb-6">Love Our Listings</h1>
        <label className="block mb-3 text-xs uppercase tracking-widest" style={{ color: GOLD }}>Email</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 bg-transparent text-white"
          style={{ border: `1px solid ${GOLD}55` }} />
        <label className="block mb-3 text-xs uppercase tracking-widest" style={{ color: GOLD }}>Password</label>
        <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-3 py-2 bg-transparent text-white"
          style={{ border: `1px solid ${GOLD}55` }} />
        {error && <p className="text-sm mb-4" style={{ color: "#ef4444" }}>{error}</p>}
        <button disabled={busy} type="submit"
          className="w-full py-3 text-xs uppercase tracking-widest font-bold"
          style={{ background: GOLD, color: BG, opacity: busy ? 0.6 : 1 }}>
          {busy ? "…" : mode === "signin" ? "Sign In" : "Create Account"}
        </button>
        <button type="button" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="w-full mt-4 text-xs uppercase tracking-widest" style={{ color: GOLD }}>
          {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
        </button>
        <p className="text-[10px] mt-6 text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
          New accounts are not granted admin access automatically. Ask an existing admin to grant the role.
        </p>
      </form>
    </div>
  );
};

export default AuthPage;