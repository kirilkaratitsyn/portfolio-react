declare module 'swiper/react' {
  import { Swiper as SwiperType, SwiperSlide as SwiperSlideType } from 'swiper';
  
  export const Swiper: (props: any) => JSX.Element;
  export const SwiperSlide: (props: any) => JSX.Element;
} 