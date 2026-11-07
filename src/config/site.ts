import { NavItem, PricingPlan, FaqItem, LocalArea } from "@/types";

export const siteConfig = {
  name: "IPTV Brampton",
  shortName: "IPTV Brampton",
  description:
    "Looking for IPTV in Brampton, Canada? Explore our subscription plans, compatible devices, service features and customer support. Find the right plan for your needs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://iptvbrampton.ca",
  ogImage: "/opengraph-image",
  currency: "CAD",
  currencySymbol: "$",
  locale: "en_CA",
  primaryKeyword: "IPTV Brampton",
  secondaryKeywords: [
    "IPTV in Brampton",
    "Best IPTV Brampton",
    "IPTV service Brampton",
    "IPTV subscription Brampton",
    "IPTV Canada",
    "Best IPTV Canada",
    "IPTV Ontario",
    "Brampton IPTV service",
  ],
  contact: {
    email: "support@iptvbrampton.ca",
    phone: "+1 (905) 555-0199", // Configurable Canadian GTA/Brampton area code placeholder
    phoneDisplay: "+1 (905) 555-0199",
    whatsAppNumber: "+19055550199",
    whatsAppUrl: "https://wa.me/19055550199?text=Hello%20IPTV%20Brampton%2C%20I%20would%20like%20to%20inquire%20about%20a%20subscription%20plan.",
    hours: "Monday to Sunday: 9:00 AM 11:00 PM EST",
    supportResponseTime: "Typically under 2 hours",
    address: {
      city: "Brampton",
      region: "Ontario",
      country: "Canada",
      areaCode: "L6T / L6P / L6R / L6X / L6Y / L6Z",
    },
  },
  navItems: [
    { label: "IPTV Brampton", href: "/" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQs", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  footerLegal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ] as NavItem[],
  bramptonAreas: [
    {
      name: "Downtown Brampton",
      postalPrefix: "L6W / L6V",
      description:
        "Historic central Brampton with dense residential hubs and high-speed Bell Fibe and Rogers fiber connections.",
      highlights: [
        "High-density urban fiber infrastructure",
        "Low latency streaming on major Ontario CDN nodes",
        "Compatible with all Smart TVs and streaming boxes",
      ],
    },
    {
      name: "Bramalea",
      postalPrefix: "L6T / L6S",
      description:
        "Established master-planned neighborhood featuring extensive suburban residential communities and multi-unit residences.",
      highlights: [
        "Reliable coaxial and fiber internet coverage",
        "Family entertainment streaming across multiple devices",
        "Sports and Canadian broadcast networks compatibility",
      ],
    },
    {
      name: "Mount Pleasant",
      postalPrefix: "L6X / L7A",
      description:
        "Fast-growing northwest Brampton neighborhood with modern residential construction and gigabit fiber to the home readiness.",
      highlights: [
        "Modern fiber-optic connectivity",
        "Seamless 4K and Ultra HD streaming capability",
        "Popular among commuters and tech-savvy households",
      ],
    },
    {
      name: "Springdale",
      postalPrefix: "L6R",
      description:
        "Dynamic northeast Brampton community with vibrant multicultural viewership seeking diverse international and Canadian programming.",
      highlights: [
        "High demand for international, South Asian, and regional content",
        "Multi-screen simultaneous streaming for large households",
        "Support for Android boxes, Firesticks, and Formuler units",
      ],
    },
    {
      name: "Heart Lake",
      postalPrefix: "L6Z",
      description:
        "Scenic north Brampton area with family-focused residential subdivisions and steady high-speed cable and DSL networks.",
      highlights: [
        "Stable streaming performance across residential broadband",
        "Full support for Canadian news, weather, and live sports",
        "Quick setup on Firestick, Roku TV, and mobile tablets",
      ],
    },
    {
      name: "Fletcher's Meadow & Castlemore",
      postalPrefix: "L6X / L6P",
      description:
        "Expansive northwest and northeast Brampton corridors with heavy multi device streaming demands during prime time hours.",
      highlights: [
        "Optimized routing to avoid evening peak congestion",
        "Extensive TV series, on demand movies, and 24/7 channels",
        "Simple remote configuration and Canadian support",
      ],
    },
  ] as LocalArea[],
  pricingPlans: [
    {
      id: "plan-1m",
      name: "1 Month Access",
      duration: "1 Month",
      price: 12.99,
      period: "per month",
      cadPriceFormatted: "$12.99 CAD",
      description:
        "Flexible month to month access with no long term contract. Ideal for trying the service or short term entertainment needs.",
      connectionCount: 1,
      features: [
        "Full Live TV Channel Lineup",
        "Canadian & US Regional Networks",
        "Comprehensive Sports & Live Events",
        "HD & 4K Streaming Support (where available)",
        "On Demand Movies & TV Series Library",
        "Compatible with Smart TV, Firestick, Android, iOS",
        "Electronic Program Guide (EPG) Included",
        "Technical Setup Assistance via Email & WhatsApp",
      ],
    },
    {
      id: "plan-3m",
      name: "3 Months Access",
      duration: "3 Months",
      price: 25.5,
      period: "per 3 months",
      cadPriceFormatted: "$25.50 CAD",
      description:
        "A balanced quarterly subscription offering extended uninterrupted viewing without an annual commitment.",
      connectionCount: 1,
      features: [
        "Full Live TV Channel Lineup",
        "Canadian & US Regional Networks",
        "Live Sports Coverage & Premium Events",
        "HD & 4K Streaming Support (where available)",
        "Regularly Updated On Demand Library",
        "Compatible with all Supported Devices & Apps",
        "Full Electronic Program Guide (EPG)",
        "Priority Customer & Technical Assistance",
      ],
    },
    {
      id: "plan-6m",
      name: "6 Months Access",
      duration: "6 Months",
      price: 50.99,
      period: "per 6 months",
      cadPriceFormatted: "$50.99 CAD",
      description:
        "Extended half-year subscription delivering reliable seasonal sports, movies, and family television with zero contracts.",
      connectionCount: 1,
      features: [
        "Full Live TV Channel Lineup for 180 Days",
        "Canadian, US & International Channels",
        "Live Sports Coverage & Premium Events",
        "HD & 4K Ultra HD Streams (where available)",
        "Complete On Demand Movies & Series Library",
        "Universal Hardware & Multi-App Support",
        "Full Electronic Program Guide (EPG)",
        "Priority Customer & Technical Assistance",
      ],
    },
    {
      id: "plan-12m",
      name: "12 Months Access",
      duration: "12 Months",
      price: 79.99,
      period: "per year",
      cadPriceFormatted: "$79.99 CAD",
      description:
        "Full annual streaming subscription for households seeking year-round entertainment, live sports, and news at our best rate.",
      connectionCount: 1,
      features: [
        "Full Live TV Channel Lineup for 365 Days",
        "Canadian, US & International Channels",
        "All Major Sports Leagues & Tournament Coverage",
        "HD & 4K Ultra HD Streams (where broadcasted)",
        "Complete On Demand Movies & Box Sets",
        "Multi Device Compatibility Across Your Home",
        "Real-Time EPG with 7-Day Guide Data",
        "Dedicated VIP Customer Onboarding & Support",
      ],
    },
  ] as PricingPlan[],
  devices: [
    {
      name: "Smart TVs",
      icon: "Tv",
      description:
        "Stream directly through native apps on Samsung Tizen, LG webOS, Sony Android TV, and Hisense VIDAA displays.",
      compatibleApps: ["IPTV Smarters Pro", "IBO Player", "Smart IPTV", "Nanomid Player"],
    },
    {
      name: "Amazon Fire TV & Firestick",
      icon: "Flame",
      description:
        "Compatible with all Fire TV Stick models (Lite, 4K, 4K Max, Cube). Lightweight setup via Downloader.",
      compatibleApps: ["TiviMate IPTV Player", "IPTV Smarters Pro", "XCIPTV", "IMPlayer"],
    },
    {
      name: "Android TV & Set Top Boxes",
      icon: "Bot",
      description:
        "Smooth, responsive playback on Nvidia Shield, Chromecast with Google TV, Xiaomi Mi Box, and generic Android boxes.",
      compatibleApps: ["TiviMate (Recommended)", "OTT Navigator", "IPTV Smarters", "Televizo"],
    },
    {
      name: "Apple TV, iPhone & iPad",
      icon: "Smartphone",
      description:
        "Crisp playback on tvOS and iOS devices via App Store streaming players with AirPlay support.",
      compatibleApps: ["Smarters Player Lite", "GSE Smart IPTV", "Snappier IPTV", "UHF"],
    },
    {
      name: "Windows PC & Mac",
      icon: "Laptop",
      description:
        "Watch live streams on your desktop or laptop during work, study, or travel using dedicated software.",
      compatibleApps: ["VLC Media Player", "IPTV Smarters PC", "MyIPTV Player", "Web Player"],
    },
    {
      name: "MAG & Formuler Dedicated Boxes",
      icon: "Radio",
      description:
        "Hardware-level integration with Stalker Portal for MAG 254/322/420/524 and Formuler MyTVOnline 2 & 3.",
      compatibleApps: ["Stalker Portal", "MyTVOnline 2", "MyTVOnline 3", "Ministra"],
    },
  ],
  homeFaqs: [
    {
      question: "What is IPTV in Brampton?",
      answer:
        "IPTV (Internet Protocol Television) delivers television programming, live sports, news, and on demand movies over your existing high-speed internet connection instead of traditional coaxial cable or satellite dishes. For Brampton residents connected via Bell Fibe, Rogers Ignite, TekSavvy, or Cogeco, IPTV offers a flexible, modern streaming alternative that works seamlessly on Smart TVs, Firesticks, and mobile devices.",
    },
    {
      question: "How much does an IPTV subscription cost in Brampton?",
      answer:
        "Our IPTV subscription plans for Brampton and Canadian customers are billed in Canadian Dollars (CAD). We offer flexible options starting from $12.99 CAD for 1 Month, $25.50 CAD for 3 Months, $50.99 CAD for 6 Months, and $79.99 CAD for 12 Months. There are no contracts, no hidden installation fees, and no equipment rental charges.",
    },
    {
      question: "Which devices support IPTV?",
      answer:
        "Our service is compatible with virtually all modern streaming hardware: Amazon Fire TV Sticks (all generations), Samsung & LG Smart TVs, Android TV boxes (including Nvidia Shield and Chromecast with Google TV), Apple TV, iPhones, iPads, Android smartphones, Windows PCs, Mac computers, and dedicated IPTV hardware such as Formuler and MAG devices.",
    },
    {
      question: "Can I use IPTV in Canada?",
      answer:
        "Yes, you can use IPTV services in Canada across all provinces and territories. Viewers in Brampton and throughout Ontario simply need a stable broadband internet connection with recommended download speeds of at least 15 25 Mbps for smooth HD streaming and 30 50 Mbps for 4K content.",
    },
    {
      question: "Does IPTV work on Smart TVs?",
      answer:
        "Yes. Smart TVs running Android TV, Google TV, Samsung Tizen, or LG webOS can easily install compatible IPTV player applications such as IPTV Smarters Pro, IBO Player, or Smart IPTV from their respective app stores.",
    },
    {
      question: "How do I set up an IPTV subscription?",
      answer:
        "Setup involves three simple steps: First, select your preferred subscription period. Second, complete your order details. Third, you will receive your M3U playlist URL, Xtream Codes credentials, and step by step setup instructions for your chosen device. Setup typically takes less than 5 minutes.",
    },
    {
      question: "Are HD and 4K streams available?",
      answer:
        "Yes, high definition (HD) streams are standard across all major channels, and 4K Ultra HD feeds are provided for select live sports, special events, and high-production movie content where the original broadcaster transmits in 4K resolution.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 7 days a week from 9:00 AM to 11:00 PM EST via WhatsApp and email at support@iptvbrampton.ca. Typical response time is under two hours.",
    },
    {
      question: "Can I test the service before purchasing a long term plan?",
      answer:
        "Yes, we offer short term 1-month subscriptions with zero commitment so you can thoroughly test stream stability, channel selection, and device compatibility in your Brampton home before committing to a longer subscription.",
    },
  ] as FaqItem[],
};
