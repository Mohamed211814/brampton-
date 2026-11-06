export interface NavItem {
  label: string;
  href: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  period: string;
  cadPriceFormatted: string;
  description: string;
  popular?: boolean;
  features: string[];
  connectionCount: number;
  badge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface DeviceItem {
  name: string;
  icon: string;
  description: string;
  compatibleApps: string[];
}

export interface LocalArea {
  name: string;
  description: string;
  postalPrefix: string;
  highlights: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  keywords: string[];
  content: string; // Markdown or rich HTML-like formatted content
}

