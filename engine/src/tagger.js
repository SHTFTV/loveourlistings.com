/**
 * Love Our Listings — Country Tagger
 * Matches posts to countries based on keyword signals
 */

const config = require('./config');

function tagCountries(item) {
  const searchText = [
    item.title,
    item.description,
    (item.tags || []).join(' '),
    (item.influencerMarkets || []).join(' '),
  ].join(' ').toLowerCase();

  const matched = [];

  for (const [country, keywords] of Object.entries(config.countryKeywords)) {
    for (const kw of keywords) {
      if (searchText.includes(kw.toLowerCase())) {
        if (!matched.includes(country)) matched.push(country);
        break;
      }
    }
  }

  // If influencer post, also add their declared markets
  if (item.influencerMarkets && item.influencerMarkets.length) {
    for (const market of item.influencerMarkets) {
      if (!matched.includes(market)) matched.push(market);
    }
  }

  // Default to 'Global' if no country match
  if (matched.length === 0) matched.push('Global');

  return matched;
}

function deduplicateItems(newItems, existingIds) {
  return newItems.filter(item => !existingIds.has(item.id));
}

module.exports = { tagCountries, deduplicateItems };
