import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const slides = [
  {
    id: 1,
    image: 'https://www.ibef.org/discoverindia/organic-products/organic_images/io-bottom-img.jpg',
    title: 'Slide One',
  },
  {
    id: 2,
    image: 'https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?s=612x612&w=0&k=20&c=IS_ZuHCF3N66jhDMwt2s7J_PGWABlpv2ISEAwpJ4JKU=',
    title: 'Slide Two',
  },
  {
    id: 3,
    image: 'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg',
    title: 'Slide Three',
  },
];

const Home = () => {
  return (
    <section className="w-full scroll-auto">
      {/* Banner Section */}
      <div className="bg-indigo-600 text-white py-20 text-center ">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">Find the best products at unbeatable prices.</p>
        <button className="bg-white text-indigo-600 px-6 py-3 font-semibold rounded hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>

      {/* Slider Section */}
      <div className="mt-10 px-6 max-w-6xl mx-auto mb-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-lg shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};




export default Home
