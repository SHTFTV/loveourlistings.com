/**
 * Love Our Listings — Content Engine Config
 * All feeds, sources, and settings in one place
 */

module.exports = {

  site: {
    domain: 'https://www.loveourlistings.com',
    name: 'Love Our Listings',
    adminEmail: 'admin@loveourlistings.com',
  },

  claude: {
    model: 'claude-sonnet-4-6',
    maxTokens: 1500,
    apiUrl: 'https://api.anthropic.com/v1/messages',
  },

  // How often the cron runs (in ms) — default 6 hours
  cronInterval: 6 * 60 * 60 * 1000,

  // Max posts to process per run (cost control)
  maxPostsPerRun: 20,

  // Influencer RSS/YouTube feeds
  influencerFeeds: [
    {
      name: 'Ryan Serhant',
      handle: 'ryanserhant',
      platform: 'youtube',
      rss: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCblJssbmhQFADEBqibHC4Uw',
      markets: ['United States', 'United Kingdom', 'United Arab Emirates'],
      tags: ['agent-brand', 'luxury-sales', 'new-york'],
    },
    {
      name: 'Fredrik Eklund',
      handle: 'fredrikeklund',
      platform: 'youtube',
      rss: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCf5MHkhmd1tFtWJJJfHFVwA',
      markets: ['United States', 'United Kingdom', 'France'],
      tags: ['agent-brand', 'luxury-sales', 'million-dollar-listing'],
    },
    {
      name: 'Darren Kriz',
      handle: 'darrenkriz',
      platform: 'youtube',
      rss: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCQi7LGc_dXr1V2HvmQGT1Ig',
      markets: ['United States'],
      tags: ['property-tour', 'los-angeles', 'luxury-homes'],
    },
  ],

  // Market publication RSS feeds
  publicationFeeds: [
    {
      name: 'Mansion Global',
      url: 'https://www.mansionglobal.com/rss',
      tags: ['market-intel', 'luxury-news'],
    },
    {
      name: 'Architectural Digest',
      url: 'https://www.architecturaldigest.com/feed/rss',
      tags: ['design', 'interiors', 'lifestyle'],
    },
    {
      name: 'Financial Times Property',
      url: 'https://www.ft.com/rss/home',
      tags: ['market-intel', 'investment'],
    },
    {
      name: 'Bloomberg Real Estate',
      url: 'https://feeds.bloomberg.com/real-estate/news.rss',
      tags: ['market-intel', 'investment'],
    },
  ],

  // Country → market keyword mapping for tagging posts
  countryKeywords: {
    'United States':         ['manhattan', 'malibu', 'hamptons', 'beverly hills', 'aspen', 'palm beach', 'miami', 'new york', 'los angeles', 'usa', 'american'],
    'Canada':                ['vancouver', 'toronto', 'whistler', 'montreal', 'canadian'],
    'United Kingdom':        ['london', 'mayfair', 'knightsbridge', 'cotswolds', 'edinburgh', 'uk', 'british'],
    'France':                ['paris', 'côte d\'azur', 'saint-tropez', 'cannes', 'french riviera', 'french'],
    'Monaco':                ['monaco', 'monte carlo', 'fontvieille'],
    'United Arab Emirates':  ['dubai', 'palm jumeirah', 'abu dhabi', 'uae', 'emirates'],
    'Italy':                 ['lake como', 'tuscany', 'amalfi', 'rome', 'milan', 'italian'],
    'Spain':                 ['marbella', 'ibiza', 'madrid', 'barcelona', 'spanish'],
    'Switzerland':           ['geneva', 'zurich', 'gstaad', 'verbier', 'swiss'],
    'Portugal':              ['lisbon', 'algarve', 'cascais', 'portuguese'],
    'Greece':                ['mykonos', 'santorini', 'athens', 'greek'],
    'Australia':             ['sydney', 'melbourne', 'gold coast', 'australian'],
    'Japan':                 ['tokyo', 'niseko', 'kyoto', 'japanese'],
    'Thailand':              ['phuket', 'koh samui', 'bangkok', 'thai'],
    'Mexico':                ['los cabos', 'polanco', 'cancun', 'mexico city', 'mexican'],
    'Bahamas':               ['nassau', 'lyford cay', 'paradise island', 'bahamian'],
    'Cayman Islands':        ['grand cayman', 'seven mile beach', 'cayman'],
    'South Africa':          ['cape town', 'clifton', 'johannesburg', 'south african'],
    'New Zealand':           ['queenstown', 'auckland', 'waiheke', 'new zealand'],
    'Mauritius':             ['grand baie', 'tamarin', 'mauritius'],
    'Morocco':               ['marrakech', 'casablanca', 'morocco'],
    'Kenya':                 ['nairobi', 'karen', 'kenya'],
    'Qatar':                 ['doha', 'the pearl', 'qatar'],
    'India':                 ['mumbai', 'delhi', 'bangalore', 'goa', 'india'],
    'Germany':               ['munich', 'hamburg', 'berlin', 'german'],
    'Israel':                ['tel aviv', 'herzliya', 'israel'],
    'Fiji':                  ['fiji', 'nadi', 'viti levu'],
    'Puerto Rico':           ['dorado beach', 'san juan', 'puerto rico'],
    'Dominican Republic':    ['cap cana', 'casa de campo', 'dominican'],
    'Turks and Caicos':      ['grace bay', 'providenciales', 'turks'],
    'British Virgin Islands':['tortola', 'virgin gorda', 'bvi'],
    'Saint Barthélemy':      ['st barths', 'saint barths', 'gustavia'],
  },

};
