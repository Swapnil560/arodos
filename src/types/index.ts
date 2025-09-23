export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: string;
  number: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}