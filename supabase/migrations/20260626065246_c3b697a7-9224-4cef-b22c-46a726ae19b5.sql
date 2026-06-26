CREATE TABLE public.rss_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source TEXT NOT NULL,
  guid TEXT NOT NULL,
  title TEXT NOT NULL,
  link TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  published_at TIMESTAMPTZ,
  categories TEXT[] DEFAULT '{}',
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (source, guid)
);
CREATE INDEX rss_posts_published_idx ON public.rss_posts (published_at DESC);
CREATE INDEX rss_posts_source_idx ON public.rss_posts (source);
GRANT SELECT ON public.rss_posts TO anon;
GRANT SELECT ON public.rss_posts TO authenticated;
GRANT ALL ON public.rss_posts TO service_role;
ALTER TABLE public.rss_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read rss posts" ON public.rss_posts FOR SELECT USING (true);