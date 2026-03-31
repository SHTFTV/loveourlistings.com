CREATE TABLE public.luxury_news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  link text UNIQUE NOT NULL,
  summary text,
  category text NOT NULL DEFAULT 'global',
  source text NOT NULL,
  image_url text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.luxury_news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read luxury_news"
  ON public.luxury_news
  FOR SELECT
  USING (true);

CREATE POLICY "Service role can manage luxury_news"
  ON public.luxury_news
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
