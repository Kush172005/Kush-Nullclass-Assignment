export interface Article {
    source: { name: string };
    author?: string;
    title: string;
    description?: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content?: string;
}

export const tradingNewsData: Article[] = [
    {
        source: { name: "Bloomberg" },
        author: "Bloomberg Markets",
        title: "Fed Signals Potential Rate Cuts as Inflation Cools",
        description:
            "Federal Reserve officials indicated they could cut interest rates in the coming months if inflation continues to moderate, minutes from their latest meeting showed.",
        url: "https://www.bloomberg.com/markets",
        urlToImage:
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        content:
            "Federal Reserve officials indicated they could cut interest rates in the coming months if inflation continues to moderate, minutes from their latest meeting showed.",
    },
    {
        source: { name: "Financial Times" },
        author: "FT Markets Team",
        title: "Oil Prices Surge Amid Middle East Tensions",
        description:
            "Crude oil prices jumped more than 3% on Wednesday as geopolitical tensions in the Middle East raised concerns about potential supply disruptions.",
        url: "https://www.ft.com/markets",
        urlToImage:
            "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        content:
            "Crude oil prices jumped more than 3% on Wednesday as geopolitical tensions in the Middle East raised concerns about potential supply disruptions.",
    },
    {
        source: { name: "CNBC" },
        author: "CNBC Markets",
        title: "Tech Stocks Rally as AI Optimism Grows",
        description:
            "Technology stocks led a broad market rally on Thursday as investors bet on continued growth in artificial intelligence applications across industries.",
        url: "https://www.cnbc.com/markets",
        urlToImage:
            "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1469&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        content:
            "Technology stocks led a broad market rally on Thursday as investors bet on continued growth in artificial intelligence applications across industries.",
    },
    {
        source: { name: "Wall Street Journal" },
        author: "WSJ Markets",
        title: "Dollar Weakens as Global Growth Concerns Ease",
        description:
            "The U.S. dollar fell against major currencies on Friday as better-than-expected economic data from Europe and China eased concerns about a global slowdown.",
        url: "https://www.wsj.com/market-data",
        urlToImage:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        content:
            "The U.S. dollar fell against major currencies on Friday as better-than-expected economic data from Europe and China eased concerns about a global slowdown.",
    },
    {
        source: { name: "Reuters" },
        author: "Reuters Business",
        title: "Gold Hits Record High on Safe-Haven Demand",
        description:
            "Gold prices reached an all-time high on Monday as investors sought safe-haven assets amid growing economic uncertainty and geopolitical tensions.",
        url: "https://www.reuters.com/markets",
        urlToImage:
            "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
        content:
            "Gold prices reached an all-time high on Monday as investors sought safe-haven assets amid growing economic uncertainty and geopolitical tensions.",
    },
    {
        source: { name: "MarketWatch" },
        author: "MarketWatch",
        title: "Crypto Market Rebounds as Bitcoin Surpasses $60,000",
        description:
            "The cryptocurrency market staged a strong recovery this week, with Bitcoin surpassing the $60,000 mark for the first time in months as institutional adoption continues to grow.",
        url: "https://www.marketwatch.com/investing/cryptocurrency",
        urlToImage:
            "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1469&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        content:
            "The cryptocurrency market staged a strong recovery this week, with Bitcoin surpassing the $60,000 mark for the first time in months as institutional adoption continues to grow.",
    },
    {
        source: { name: "The Economist" },
        author: "The Economist Finance",
        title: "European Banks Show Resilience Despite Economic Headwinds",
        description:
            "Major European banks reported better-than-expected quarterly earnings, showing resilience despite persistent economic challenges in the region.",
        url: "https://www.economist.com/finance-and-economics",
        urlToImage:
            "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
        content:
            "Major European banks reported better-than-expected quarterly earnings, showing resilience despite persistent economic challenges in the region.",
    },
    {
        source: { name: "Barron's" },
        author: "Barron's Markets",
        title: "Small-Cap Stocks Outperform as Economic Recovery Broadens",
        description:
            "Small-cap stocks have outperformed their large-cap counterparts in recent weeks as investors bet on a broader economic recovery benefiting smaller companies.",
        url: "https://www.barrons.com/market-data",
        urlToImage:
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
        content:
            "Small-cap stocks have outperformed their large-cap counterparts in recent weeks as investors bet on a broader economic recovery benefiting smaller companies.",
    },
    {
        source: { name: "Yahoo Finance" },
        author: "Yahoo Finance",
        title: "Retail Investors Drive Meme Stock Revival",
        description:
            "Several meme stocks are seeing renewed interest from retail investors, reminiscent of the trading frenzy that captivated markets last year.",
        url: "https://finance.yahoo.com/",
        urlToImage:
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 60 * 60 * 60 * 1000).toISOString(),
        content:
            "Several meme stocks are seeing renewed interest from retail investors, reminiscent of the trading frenzy that captivated markets last year.",
    },
    {
        source: { name: "Investing.com" },
        author: "Investing.com Analysis",
        title: "Commodities Outlook: Analysts Predict Supercycle Continuation",
        description:
            "Leading market analysts predict the commodities supercycle will continue through next year, driven by infrastructure spending and the green energy transition.",
        url: "https://www.investing.com/commodities/",
        urlToImage:
            "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
        content:
            "Leading market analysts predict the commodities supercycle will continue through next year, driven by infrastructure spending and the green energy transition.",
    },
    {
        source: { name: "Forbes" },
        author: "Forbes Markets",
        title: "ESG Investing Faces Regulatory Scrutiny Amid Greenwashing Concerns",
        description:
            "Regulators are increasing scrutiny of ESG investment funds amid concerns about greenwashing and inconsistent standards for environmental and social metrics.",
        url: "https://www.forbes.com/money/",
        urlToImage:
            "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1474&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 84 * 60 * 60 * 1000).toISOString(),
        content:
            "Regulators are increasing scrutiny of ESG investment funds amid concerns about greenwashing and inconsistent standards for environmental and social metrics.",
    },
    {
        source: { name: "Business Insider" },
        author: "Business Insider Markets",
        title: "Hedge Funds Bet Against Treasury Bonds as Inflation Concerns Persist",
        description:
            "Major hedge funds are increasing their short positions against U.S. Treasury bonds, betting that inflation will remain higher than the Federal Reserve's target.",
        url: "https://www.businessinsider.com/markets",
        urlToImage:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 96 * 60 * 60 * 1000).toISOString(),
        content:
            "Major hedge funds are increasing their short positions against U.S. Treasury bonds, betting that inflation will remain higher than the Federal Reserve's target.",
    },
    {
        source: { name: "The Motley Fool" },
        author: "Motley Fool Analysts",
        title: "Dividend Aristocrats Outperform in Uncertain Market Environment",
        description:
            "Companies with long histories of dividend increases, known as Dividend Aristocrats, have outperformed the broader market amid economic uncertainty.",
        url: "https://www.fool.com/investing/",
        urlToImage:
            "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1374&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 108 * 60 * 60 * 1000).toISOString(),
        content:
            "Companies with long histories of dividend increases, known as Dividend Aristocrats, have outperformed the broader market amid economic uncertainty.",
    },
    {
        source: { name: "Seeking Alpha" },
        author: "Seeking Alpha Contributors",
        title: "Semiconductor Stocks Rally on AI Chip Demand",
        description:
            "Semiconductor stocks rallied after several companies reported strong demand for chips used in artificial intelligence applications, exceeding analyst expectations.",
        url: "https://seekingalpha.com/",
        urlToImage:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 120 * 60 * 60 * 1000).toISOString(),
        content:
            "Semiconductor stocks rallied after several companies reported strong demand for chips used in artificial intelligence applications, exceeding analyst expectations.",
    },
    {
        source: { name: "Financial Post" },
        author: "Financial Post Markets",
        title: "Canadian Dollar Strengthens as Commodity Prices Rise",
        description:
            "The Canadian dollar strengthened against its U.S. counterpart as rising commodity prices boosted the outlook for Canada's resource-heavy economy.",
        url: "https://financialpost.com/markets",
        urlToImage:
            "https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 132 * 60 * 60 * 1000).toISOString(),
        content:
            "The Canadian dollar strengthened against its U.S. counterpart as rising commodity prices boosted the outlook for Canada's resource-heavy economy.",
    },
    {
        source: { name: "Morningstar" },
        author: "Morningstar Research",
        title: "Value Stocks Show Signs of Revival After Years of Underperformance",
        description:
            "Value stocks are showing signs of a comeback after years of underperformance relative to growth stocks, as higher interest rates and inflation concerns shift investor preferences.",
        url: "https://www.morningstar.com/",
        urlToImage:
            "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 144 * 60 * 60 * 1000).toISOString(),
        content:
            "Value stocks are showing signs of a comeback after years of underperformance relative to growth stocks, as higher interest rates and inflation concerns shift investor preferences.",
    },
    {
        source: { name: "Trading Economics" },
        author: "Trading Economics",
        title: "Global Manufacturing PMI Shows Expansion for Third Consecutive Month",
        description:
            "The global manufacturing Purchasing Managers' Index (PMI) remained in expansion territory for the third consecutive month, suggesting a continued recovery in industrial activity.",
        url: "https://tradingeconomics.com/",
        urlToImage:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 156 * 60 * 60 * 1000).toISOString(),
        content:
            "The global manufacturing Purchasing Managers' Index (PMI) remained in expansion territory for the third consecutive month, suggesting a continued recovery in industrial activity.",
    },
    {
        source: { name: "Benzinga" },
        author: "Benzinga Pro",
        title: "Options Market Signals Increased Volatility Ahead of Earnings Season",
        description:
            "The options market is pricing in higher volatility for stocks ahead of the upcoming earnings season, with implied volatility rising across major indices.",
        url: "https://www.benzinga.com/markets",
        urlToImage:
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop",
        publishedAt: new Date(Date.now() - 168 * 60 * 60 * 1000).toISOString(),
        content:
            "The options market is pricing in higher volatility for stocks ahead of the upcoming earnings season, with implied volatility rising across major indices.",
    },
];
