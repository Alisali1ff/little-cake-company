
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string; // Featured image
  images: string[]; // Gallery images
  description: string;
  ingredients?: string[];
  tag?: string;
  deliveryDetail?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export enum SectionType {
  HERO = 'Hero',
  SERVICES = 'Services',
  TESTIMONIALS = 'Testimonials',
  ABOUT = 'About',
  CONTACT = 'Contact'
}
