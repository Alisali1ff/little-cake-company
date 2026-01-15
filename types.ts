
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
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
