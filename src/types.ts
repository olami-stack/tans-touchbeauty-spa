export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  quote: string;
  stars: number;
}

export interface MembershipTier {
  id: string;
  tierName: string;
  subTitle: string;
  features: string[];
  featured?: boolean;
}
