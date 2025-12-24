'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';

const projects = [
  {
    id: 1,
    image: '/images/rektor.png',
    title: 'Rektor UNY Cup 2025',
  },
  {
    id: 2,
    image: '/images/kai.png',
    title: 'KAI Glow Night Run 2025',
  },
  {
    id: 3,
    image: '/images/funrun.png',
    title: 'UNY FUN RUN 2025',
  },
  {
    id: 4,
    image: '/images/grad.jpg',
    title: 'Graduation Moment 2024',
  },
  {
    id: 5,
    image: '/images/grad2.JPG',
    title: 'University Graduation',
  },
];

export default function Home() {
  return (
    <div className="">
      <div id="home" className="w-full bg-gradient-to-b from-[#F8A108] to-transparent overflow-hidden">
        <div className="relative min-h-screen w-full bg-cover bg-center" style={{
          backgroundImage: "url('/images/background.png')"
        }} >
          <div className="absolute inset-0 bg-[#F8A108]/1">
            <div className="relative w-full flex items-center px-8 py-10 z-50">
              <nav className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[#fafafa]/70 backdrop-blur-md shadow-lg shadow-black/10 px-6 py-2">
                <ul className="flex items-center gap-4 font-montserrat text-sm font-medium text-black/80">
                  <li><a href="#home" className="relative transition hover:text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">Home</a></li>
                  <li><a href="#about" className="relative transition hover:text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">About</a></li>
                  <li><a href="#pricing" className="relative transition hover:text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">Pricing</a></li>
                  <li><a href="#project" className="relative transition hover:text-black after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">Project</a></li>
                </ul>
              </nav>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center md:items-start md:justify-center md:h-screen md:pl-20 pt-5 md:pb-56">

              <h1 className="mt-8 md:mt-0 font-montserrat text-center md:text-left text-3xl md:text-7xl font-bold text-[#fafafa] text-shadow leading-none">
                SWARNA WORKS <br /> CREATIVE AGENCY
              </h1>

              <h1 className="font-montserrat text-center md:text-left text-[12px] md:text-2xl text-[#fafafa] text-shadow mb-4">
                One Agency, Thousands Solution !
              </h1>

              <a
                href="#pricing"
                className="rounded-full bg-white px-6 py-2 font-montserrat text-sm font-semibold text-black/80 shadow-md shadow-black/20 transition hover:shadow-lg hover:shadow-black/30 active:scale-95">
                Get Started
              </a>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center md:left-auto md:right-0 md:translate-x-0 md:w-1/2 md:justify-end md:pr-10 pointer-events-none">
              <div className="absolute bottom-10 md:bottom-1 left-1/2 md:left-[63%] -translate-x-1/2 h-[55vh] w-[55vh] md:h-[80vh] md:w-[80vh] rounded-full border-2 border-dashed bg-white/50 blur-sm" />
              <div className="absolute bottom-6 md:bottom-[-18px] left-1/2 md:left-[63%] -translate-x-1/2 h-[58vh] w-[58vh] md:h-[84vh] md:w-[84vh]">
                <div className="h-full w-full rounded-full border-2 border-dashed animate-spin-slow" />
              </div>

              {/* Gambar Orang */}
              <img src="/images/rinorara.png" alt="" className="z-20 h-[60vh] md:h-[80vh] max-w-none w-auto object-contain object-bottom bottom-0 mr-14 md:mr-0" />
            </div>

          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-t from-[#fafafa] to-transparent z-0 pointer-events-none"></div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="relative min-h-screen w-full bg-cover bg-center bg-[#F8A108] pt-10" style={{
        backgroundImage: "url('/images/background.png')"
      }}>
        <h1 className="font-montserrat text-center text-2xl md:text-4xl font-bold text-[#fafafa] text-shadow leading-none mb-5 md:mb-20">
          Design with <br />Flexibility in services
        </h1>
        {/* --- MAIN CONTAINER --- */}
        {/* max-w-7xl agar lebar maksimal */}
        <div className="relative mx-auto w-full max-w-7xl px-6 md:mt-20">

          {/* === BAGIAN GARIS (BACKGROUND) === */}

          {/* 1. Garis VERTIKAL (Khusus Mobile) */}
          <div className="absolute left-16 top-0 bottom-0 w-[1px] h-[40vh] bg-white/80 md:hidden" />

          {/* 2. Garis HORIZONTAL (Khusus Desktop) */}
          {/* top-8 (2rem) adalah titik tengah dari lingkaran h-16 (4rem) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-white/80" />


          {/* === BAGIAN ITEM (GRID SYSTEM) === */}
          {/* Grid 3 kolom membagi lebar secara adil & otomatis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

            {/* ITEM 1 */}
            <div className="relative flex flex-row md:flex-col items-start md:items-center">
              {/* LINGKARAN ANGKA */}
              {/* Mobile: Absolute Kiri. Desktop: Static (Flow Normal) & Lebih Besar */}
              <div className="absolute left-6 top-0 md:static flex shrink-0 h-8 w-8 md:h-16 md:w-16 items-center justify-center rounded-full bg-white text-black font-extrabold text-md md:text-2xl shadow-lg z-10">
                1
              </div>

              {/* TEKS */}
              {/* Mobile: Margin Kiri. Desktop: Margin 0, Center, Padding Top */}
              <div className="ml-20 md:ml-0 md:text-center md:mt-6 w-full">
                <h3 className="font-montserrat text-xl md:text-2xl font-extrabold text-white drop-shadow-md mb-2">
                  Contact
                </h3>
                <p className="font-montserrat text-sm md:text-lg leading-relaxed text-white/90">
                  Reach out and tell us what you need. One message is all it takes to start the process.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="relative flex flex-row md:flex-col items-start md:items-center">
              <div className="absolute left-6 top-0 md:static flex shrink-0 h-8 w-8 md:h-16 md:w-16 items-center justify-center rounded-full bg-white text-black font-extrabold text-md md:text-2xl shadow-lg z-10">
                2
              </div>
              <div className="ml-20 md:ml-0 md:text-center md:mt-6 w-full">
                <h3 className="font-montserrat text-xl md:text-2xl font-extrabold text-white drop-shadow-md mb-2">
                  Negotiate
                </h3>
                <p className="font-montserrat text-sm md:text-lg leading-relaxed text-white/90">
                  We refine the plan together, the timeline and the budget until everything fits your goals perfectly.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="relative flex flex-row md:flex-col items-start md:items-center">
              <div className="absolute left-6 top-0 md:static flex shrink-0 h-8 w-8 md:h-16 md:w-16 items-center justify-center rounded-full bg-white text-black font-extrabold text-md md:text-2xl shadow-lg z-10">
                3
              </div>
              <div className="ml-20 md:ml-0 md:text-center md:mt-6 w-full">
                <h3 className="font-montserrat text-xl md:text-2xl font-extrabold text-white drop-shadow-md mb-2">
                  Finish
                </h3>
                <p className="font-montserrat text-sm md:text-lg leading-relaxed text-white/90">
                  We deliver the final result with clarity, speed, and zero hassle. Your project, completed as promised.
                </p>
              </div>
            </div>

          </div>
        </div>

        <img src="/images/rara.png" alt="" className="relative bottom-0 right-14 h-[40vh] md:h-[51vh] w-auto mt-10 opacity-90" />
      </div>

      <div id="pricing" className="relative min-h-screen w-full bg-center bg-[#fafafa] py-10" style={{
        backgroundImage: "url('/images/background.png')"
      }}>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#fafafa] to-transparent z-0 pointer-events-none"></div>

        <div className="flex flex-col items-center justify-center px-4">
          <h1 className="font-montserrat text-center text-5xl font-bold text-[#F8A108] text-shadow leading-none z-10 mb-10">
            Get an Offer
          </h1>

          {/* --- CONTAINER GRID BARU --- */}
          {/* grid-cols-1: Mobile (1 kolom/tumpuk) */}
          {/* md:grid-cols-3: Desktop (3 kolom/baris) */}
          {/* gap-10: Jarak antar kartu */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full z-10">

            {/* Card 1 */}
            {/* Hapus 'm-10', ganti jadi h-full agar tinggi kartu sama rata */}
            <div className="bg-[#FEF6D8]/60 rounded-[2.5rem] p-8 shadow-xl relative font-montserrat h-full flex flex-col">
              {/* Bagian Header */}
              <div className="flex mb-4">
                <div className="w-2 bg-[#F8A108] rounded-full mr-4 shrink-0 h-10"></div>
                <div>
                  <h2 className="bg-gradient-to-l from-[#F8A108] to-[#0a0a0a] bg-clip-text text-transparent text-4xl font-extrabold drop-shadow-md mb-1">
                    Photography
                  </h2>
                  <p className="text-sm font-bold text-black leading-tight">
                    From social content to brand storytelling.
                  </p>
                  <p className="text-[#F8A108] font-bold mt-2">Starts From</p>
                  <h3 className="text-4xl font-extrabold text-[#F8A108] drop-shadow-sm">
                    Rp200.000
                  </h3>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#F8A108] my-4"></div>

              {/* List Fitur (mb-auto agar tombol terdorong ke bawah) */}
              <ul className="space-y-4 text-lg text-gray-800 font-medium mb-auto">
                <li className="flex items-center gap-3"><CheckIcon /> <span>Photographer & Editors</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Available Storage</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Guidance Poses</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Compatible Devices</span></li>
              </ul>

              <div className="mt-10 flex justify-center">
                <button className="bg-[#F8A108] hover:bg-orange-600 text-black font-extrabold py-3 px-10 rounded-full flex items-center gap-2 shadow-lg transition-transform active:scale-95 w-full justify-center">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FEF6D8]/60 rounded-[2.5rem] p-8 shadow-xl relative font-montserrat h-full flex flex-col">
              <div className="flex mb-4">
                <div className="w-2 bg-[#F8A108] rounded-full mr-4 shrink-0 h-10"></div>
                <div>
                  <h2 className="bg-gradient-to-l from-[#F8A108] to-[#0a0a0a] bg-clip-text text-transparent text-4xl font-extrabold drop-shadow-md mb-1">
                    Videography
                  </h2>
                  <p className="text-sm font-bold text-black leading-tight">
                    From Social ads to corporate-scale video projects.
                  </p>
                  <p className="text-[#F8A108] font-bold mt-2">Starts From</p>
                  <h3 className="text-4xl font-extrabold text-[#F8A108] drop-shadow-sm">
                    Rp300.000
                  </h3>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#F8A108] my-4"></div>

              <ul className="space-y-4 text-lg text-gray-800 font-medium mb-auto">
                <li className="flex items-center gap-3"><CheckIcon /> <span>Videographers, editors, and scriptwriters.</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Providing our Best Equipment.</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Experienced production team.</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Creative Brief.</span></li>
              </ul>

              <div className="mt-10 flex justify-center">
                <button className="bg-[#F8A108] hover:bg-orange-600 text-black font-extrabold py-3 px-10 rounded-full flex items-center gap-2 shadow-lg transition-transform active:scale-95 w-full justify-center">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FEF6D8]/60 rounded-[2.5rem] p-8 shadow-xl relative font-montserrat h-full flex flex-col">
              <div className="flex mb-4">
                <div className="w-2 bg-[#F8A108] rounded-full mr-4 shrink-0 h-10"></div>
                <div>
                  <h2 className="bg-gradient-to-l from-[#F8A108] to-[#0a0a0a] bg-clip-text text-transparent text-4xl font-extrabold drop-shadow-md mb-1">
                    Website
                  </h2>
                  <p className="text-sm font-bold text-black leading-tight">
                    Fast and responsive landing page.
                  </p>
                  <p className="text-[#F8A108] font-bold mt-2">Starts From</p>
                  <h3 className="text-4xl font-extrabold text-[#F8A108] drop-shadow-sm">
                    Rp800.000
                  </h3>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#F8A108] my-4"></div>

              <ul className="space-y-4 text-lg text-gray-800 font-medium mb-auto">
                <li className="flex items-center gap-3"><CheckIcon /> <span>Responsive design & brand compliance</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Basic SEO & analytics setup</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Fast delivery: 3 to 7 working days</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Payment / Booking / Chat Integration</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Hosting and Domain</span></li>
                <li className="flex items-center gap-3"><CheckIcon /> <span>Free SSL</span></li>
              </ul>

              <div className="mt-10 flex justify-center">
                <button className="bg-[#F8A108] hover:bg-orange-600 text-black font-extrabold py-3 px-10 rounded-full flex items-center gap-2 shadow-lg transition-transform active:scale-95 w-full justify-center">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div id="project" className="relative min-h-screen w-full bg-center bg-[#F8A108] py-10" style={{
        backgroundImage: "url('/images/background.png')"
      }}>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl md:text-8xl font-montserrat text-white drop-shadow-lg tracking-tighter ">Our Recent</h1>
          <div className="bg-[#fafafa]/30 backdrop-blur-md px-8 py-1 md:px-12 md:py-2 rounded-lg -rotate-2 shadow-xl transform origin-center">
            <h1 className="text-6xl md:text-8xl font-montserrat font-bold text-white drop-shadow-lg tracking-tighter ">Project</h1>
          </div>
        </div>
        {/* Container Swiper */}
        <div className="max-w-6xl mx-auto px-8 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20} // Jarak antar slide
            slidesPerView={1.2} // Mobile: lihat 1 slide lebih sedikit
            centeredSlides={true} // FITUR UTAMA: Slide aktif di tengah
            loop={true} // Infinite loop
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, // Desktop: lihat 3 slide
                spaceBetween: 40,
              },
            }}
            className="mySwiper py-10"
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id} className="group">
                {({ isActive }) => (
                  <div className={`transition-all duration-500 ease-out transform h-[70vh] mt-[20vh] ${isActive ? 'scale-110 opacity-100' : 'scale-90 opacity-70 blur-[1px]'
                    }`}>

                    {/* Card Image */}
                    <div className={`relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] border-4 ${isActive ? 'border-white' : 'border-transparent'}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay Gradient (Supaya teks terbaca) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                    </div>

                    {/* Title (Teks di bawah) */}
                    <div className={`text-center mt-6 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white drop-shadow-md uppercase leading-tight font-montserrat">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <footer className="w-full bg-[#F8A108] py-8 font-montserrat">
          <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">

            {/* Brand Name */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Swarna Works
            </h2>

            {/* Social Icons Container */}
            <div className="flex space-x-4 mb-8">
              {/* Icon: X (Twitter) */}
              <SocialLink href="#">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialLink>

              {/* Icon: YouTube */}
              <SocialLink href="#">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialLink>

              {/* Icon: Instagram */}
              <SocialLink href="#">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1 0 2.881 1.44 1.44 0 0 1 0-2.881z" />
                </svg>
              </SocialLink>

              {/* Icon: TikTok */}
              <SocialLink href="#">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 3.13-2.56 5.65-5.69 5.65-3.1 0-5.63-2.5-5.63-5.63 0-2.6 1.83-4.8 4.31-5.46v4.25a1.41 1.41 0 0 0-1.28 1.21c-.04.42.1.84.41 1.15.31.31.74.45 1.16.41 1.26-.14 1.98-1.57 1.54-2.73V.02z" />
                </svg>
              </SocialLink>
            </div>

            {/* Garis Horizontal Hitam */}
            {/* w-full tapi dibatasi max-w-4xl agar tidak mentok pinggir layar */}
            <div className="w-full max-w-4xl h-[2px] bg-black mb-6"></div>

            {/* Copyright Text */}
            <p className="text-black text-sm md:text-base font-medium">
              © 2025 Swarna Works. All rights reserved.
            </p>

          </div>
        </footer>
      </div>
    </div>
  );
  function CheckIcon() {
    return (
      <div className="bg-[#F8A108] rounded-full p-1 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
        </svg>
      </div>
    );
  }
  function SocialLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
      <a
        href={href}
        className="bg-white text-[#F8A108] w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-md"
      >
        {children}
      </a>
    );
  }
}