CREATE TABLE public.agent_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  country TEXT NOT NULL,
  slot_number INTEGER NOT NULL,
  paypal_subscription_id TEXT UNIQUE,
  paypal_plan_id TEXT NOT NULL,
  agent_email TEXT,
  agent_name TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  cancelled_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_agent_subs_country_slot ON public.agent_subscriptions(country, slot_number);
CREATE INDEX idx_agent_subs_status ON public.agent_subscriptions(status);

GRANT SELECT ON public.agent_subscriptions TO authenticated;
GRANT ALL ON public.agent_subscriptions TO service_role;

ALTER TABLE public.agent_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all subscriptions"
  ON public.agent_subscriptions FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Public can view active slot occupancy"
  ON public.agent_subscriptions FOR SELECT
  TO anon, authenticated
  USING (status = 'active');

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_agent_subs_updated_at
  BEFORE UPDATE ON public.agent_subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Payment log
CREATE TABLE public.agent_subscription_payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  paypal_subscription_id TEXT,
  paypal_sale_id TEXT UNIQUE,
  amount_usd NUMERIC,
  raw_event JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.agent_subscription_payments TO authenticated;
GRANT ALL ON public.agent_subscription_payments TO service_role;

ALTER TABLE public.agent_subscription_payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view payments"
  ON public.agent_subscription_payments FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));