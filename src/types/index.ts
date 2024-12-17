// types.ts
export interface HomeSlider {
  id: number;
  big_image: string;
  image: string;
  video: string;
}

export interface Service {
  id: number;
  title: string;
  desc: string;
  is_active: boolean;
  main_image: { id: number; media: string };
  created_at: string;
}

export interface Expert {
  id: number;
  name: string;
  job: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  job: string;
  desc: string;
  image: string;
}

export interface Advantage {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export interface DataContextType {
  home_slider: HomeSlider;
  services: Service[];
  home_about: { id: number; title: string; image: string; video: string };
  advantages: Advantage[];
  home_services: Service[];
  home_experts: Expert[];
  testimonials: Testimonial[];
  what_we_offers: Service[];
}
