# Love Our Listings

Existing Vite magazine and public static journal at https://www.loveourlistings.com/ . Preserve the homepage, market directory, original21 journal URLs/dates, existing logo and broker-video embeds.

## Automatic We Love This Listing publication

The user's November9 instruction authorizes this existing site's unattended RSS collection, new original attributed features, automatic validation and publication. `.github/workflows/property-publisher.yml` runs in GitHub Actions every6 hours at minute43 UTC, on demand, and when its publisher/SOP changes on main. It does not depend on an open laptop, a local worker, a new paid service or a per-article manual gate.

Every run loads `operations/site-sop.json` and `operations/prior-posts.json`. It collects the established Sotheby's extraordinary-living and Robb Report shelter feeds; retains the existing Mansion Global/Christie's sources with honest fetch-error visibility; and actually collects the requested public Google News RSS luxury/waterfront queries. Google opaque redirect links are discovery, not original source URLs. Exact title matches to validated direct publisher feeds can resolve them; unresolved entries stay in the discovery record and are not auto-published. No private Google Alerts feed is invented.

The active publication path is `public/journal/`, with original source-led articles, source dates separate from new publication dates, the existing LOL logo, original labelled illustrations, and the required **We Love This Listing** identity / **Want to see your property here?** CTA. No listing photographs or source article bodies are copied. Optional branded videos require permitted photos and verified facts; they do not block article publication.

The old Node engine writes `engine/dist` and its `test-abc123` published queue entry is a fixture. The Supabase functions fill raw `luxury_news`/`rss_posts` widgets. Those implementations remain preserved, but this workflow is the one authority for new static magazine features; no duplicate journal workflow or new Supabase schedule is enabled. BuyWaterfrontCanada is a recovered property source; its tested `/feed/` returned404, so it is not falsely marked as connected RSS.

The publisher validates source hosts, TLS/public destinations, bounded same-site redirects, dates, duplicate URLs/bodies, supported property-story types, source attribution, brand/CTA and build output. Generic design stories are not labelled as individual listings. Unsupported items are quarantined automatically. Commentary is a conservative source-led editorial template, not a claim of human visits, interviews, independent valuations, current availability or general-purpose AI judgment.

Source and outcome history lives in `operations/publisher-state.json` and `operations/latest-run.json`. Failed public checks retain pending articles for an idempotent retry, with IDs and original dates preserved. Every actual new publication must pass live HTML/date/source, journal manifest/feed and sitemap checks before it is recorded as done. The workflow then appends a sanitized `/publication-results.json` event with site, title, actual article timestamp, verification time and public URL, preserving prior events. A failure event never claims a live URL. The MarkEtt public command center can consume this allowlisted result log automatically. `/publishing-status.json` exposes coarse source/collection/run health only; private SOPs and detailed logs are not in public output.

## Validation and recovery

```sh
python3 scripts/test_property_publisher.py
python3 scripts/publish_properties.py
python3 scripts/verify_property_publication.py
npm ci
npm run build
# After the generated public files are committed and existing Vercel Git deploy completes:
python3 scripts/verify_property_publication.py --live
python3 scripts/verify_property_publication.py --log
```

Workflow concurrency serializes source/content updates. It uses only this repository's contents-write token to persist source/public output and the existing Vercel Git integration to deploy; no provider secret is embedded. The action stays failed if public verification fails. Failure state is persisted and the next scheduled run can retry pending publication. Existing GitHub Actions failure notifications and durable run summaries provide cloud outcome evidence.

Rollback: disable this one workflow and revert its generated-content commit while retaining source/run evidence. Do not change DNS, replace the site, enable unrelated portfolios or reset original publication dates.
