
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Alert config (single-row table, admin-managed)
CREATE TABLE public.image_alert_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  miss_rate_threshold NUMERIC NOT NULL DEFAULT 0.5,
  error_rate_threshold NUMERIC NOT NULL DEFAULT 0.1,
  min_sample_size INTEGER NOT NULL DEFAULT 20,
  webhook_url TEXT,
  alert_email TEXT,
  cooldown_minutes INTEGER NOT NULL DEFAULT 30,
  enabled BOOLEAN NOT NULL DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.image_alert_config TO authenticated;
GRANT ALL ON public.image_alert_config TO service_role;
ALTER TABLE public.image_alert_config ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view alert config" ON public.image_alert_config
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can modify alert config" ON public.image_alert_config
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

INSERT INTO public.image_alert_config DEFAULT VALUES;

-- Alert log
CREATE TABLE public.image_alert_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  triggered_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  metric TEXT NOT NULL,
  value NUMERIC NOT NULL,
  threshold NUMERIC NOT NULL,
  delivered_email BOOLEAN NOT NULL DEFAULT false,
  delivered_webhook BOOLEAN NOT NULL DEFAULT false,
  notes TEXT
);
GRANT SELECT ON public.image_alert_log TO authenticated;
GRANT ALL ON public.image_alert_log TO service_role;
ALTER TABLE public.image_alert_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view alert log" ON public.image_alert_log
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
