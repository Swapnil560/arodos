import { Service, Stat, Testimonial } from '../types';

export const stats: Stat[] = [
  { id: '1', number: '98%', label: 'On-Time Delivery', icon: '⏰' },
  { id: '2', number: '75+', label: 'Apps Launched', icon: '📱' },
  { id: '3', number: '120+', label: 'Projects Completed', icon: '✅' },
  { id: '4', number: '35+', label: 'Brands Served', icon: '🏢' }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Website & Mobile App',
    description: 'Scalable web and mobile solutions built with modern technologies',
    icon: '💻'
  },
  {
    id: '2',
    title: 'ERP, CRM, AI-based Solutions',
    description: 'Enterprise-grade systems powered by artificial intelligence',
    icon: '🤖'
  },
  {
    id: '3',
    title: 'IT Consulting & Staff Augmentation',
    description: 'Expert guidance and skilled professionals for your projects',
    icon: '👥'
  },
  {
    id: '4',
    title: 'Product Design (UI/UX)',
    description: 'User-centered design that drives engagement and conversion',
    icon: '🎨'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    quote: 'Working with Arodos was seamless from start to finish. They delivered our MVP ahead of schedule.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Enterprise Corp',
    quote: 'Their AI-powered ERP solution transformed our operations. Highly recommended for enterprise projects.',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    role: 'Founder',
    company: 'GrowthCo',
    quote: 'Exceptional UI/UX design and development. Our user engagement increased by 300%.',
    rating: 5,
    avatar: '👩‍🚀'
  }
];