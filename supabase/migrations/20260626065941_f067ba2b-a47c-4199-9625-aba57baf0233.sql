ALTER TABLE public.rss_posts ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'pending';
UPDATE public.rss_posts SET status = 'approved' WHERE status = 'pending';
CREATE INDEX IF NOT EXISTS rss_posts_status_published_idx ON public.rss_posts (status, published_at DESC);
DROP POLICY IF EXISTS "Public can read rss posts" ON public.rss_posts;
CREATE POLICY "Public can read approved rss posts" ON public.rss_posts FOR SELECT USING (status = 'approved');