# Love Our Listings publication recovery

The sole content authority remains `scripts/publish_properties.py` and its existing static journal, manifests, media registry, source records and publication receipts. The daily minimum is **7 distinct new live features**, measured by publication date in the owner's America/Dawson_Creek timezone. Source dates remain separate. Never change an old publication date to meet the target.

## When the normal worker cannot start

Inspect the latest actual `property-publisher.yml` run and current public journal before proceeding. On November 18, 2026, GitHub Actions runs failed at startup without executing jobs. A resumed ChatGPT task is not proof that Actions recovered. Reuse pending work and deduplicate against live articles, `operations/prior-posts.json`, and publisher state.

The existing reviewed-source route supports original copy without an OpenAI runtime dependency. For every selected property, verify a fresh source within the SOP lookback, exact property identity, source publication date, factual excerpts, and a source-specific original 130–320-word feature. Retain the We Love This Listing identity and required CTA. Have another reviewer compare title, deck, body and image attribution to the actual sources.

Add reviewed entries to `operations/reviewed-properties.json`; do not waive evidence or media checks. Main source URLs already in the queue should be reused. Primary listing pages may supply exact-property photographs when news metadata images are too small. Photographs must support native 1600×900 without upscaling, retain source pairing and credit, and pass actual image/crop review. Desktop and phone rendering remain required. The two ordinary-article, six reviewed-article and four candidate-attempt bounds remain unchanged.

## Execute the existing publisher

```sh
python -m unittest discover -s scripts -p 'test_*.py'
python scripts/manual_property_catchup.py
python scripts/verify_property_publication.py
npm ci --no-audit --no-fund
npm run build
```

`manual_property_catchup.py` calls the existing publisher through its provided fetch hooks. Its bounded HTTPS transport supports this workspace's configured proxy and only explicitly reviewed public source/media hosts. It preserves redirect, response-size, feed-DTD, source/date, copy, media, deduplication and retry checks. Any additional host must first be independently established as the actual public source or exact observed image origin. It never retrieves credentials or reports an operator run as an unattended cloud job.

Previously pending, unverified articles count toward the six-reviewed-article limit. Deploy and verify that batch before admitting a further batch; do not mark pending articles verified merely to make room.

Commit all resulting journal, feed, sitemap, source/state/media and manifest changes atomically to the existing repository. Preserve the current main head with an expected-SHA lease. Binary images can be uploaded as Git blobs through the authenticated GitHub connector; local CLI authentication is not assumed. Use the existing Vercel Git deployment and confirm its exact source commit and READY state.

## Public proof and counters

```sh
python scripts/verify_property_publication.py --live
python scripts/refresh_manual_publication_proof.py
```

The live verifier checks the actual article text, new date, original source, branding, CTA, journal manifest, index, feed and sitemap. Commit the resulting verified state, `public/publication-results.json`, `public/publishing-status.json` and `public/daily-publication-proof.json`; confirm their subsequent deployment. Return the exact public article URLs and counts. Do not claim a repaired automatic engine from successful manual publication.

## Preserve history within connector limits

The old active state exceeded the connector's 16 MiB request limit. Its exact original Git blob is retained at `operations/publisher-history/before-2026-11-18-catchup.json`, with its blob SHA and SHA256 in `historyArchives`. Active state retains every verified publication run, the latest 50 operational runs, and all pending work. Article identities, queues, source evidence, deduplication and all prior run history remain intact. If another archive is needed, retain the old bytes as an immutable blob and verify completed/pending identity sets before updating active state.
