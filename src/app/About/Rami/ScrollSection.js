import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ScrollSection() {
  return(
<Swiper slidesPerView={1.2} spaceBetween={20} centeredSlides>
  <SwiperSlide>
    <h3>2003–2005</h3>
    <p>Abdoun Bridge PM<br />(Subcontractor: Jordan Sipes)</p>
  </SwiperSlide>
  <SwiperSlide>
    <h3>2006–2007</h3>
    <p>Mövenpick Dead Sea Hotel Lead<br />(New Look)</p>
  </SwiperSlide>
  <SwiperSlide>
    <h3>Credentials</h3>
    <a href="/letter.pdf" download>Download L&T Recommendation</a>
  </SwiperSlide>
  <SwiperSlide>
    <h3>Get the CV</h3>
    <a href="/rami-cv.pdf" download>Download Rami’s CV</a>
  </SwiperSlide>
</Swiper>

  )
}
