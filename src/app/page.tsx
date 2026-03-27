'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const WA_LINK_ADMIN = 'https://wa.me/6283869780959';
const WA_LINK_PHOTO = 'https://wa.me/6285747320206';

const projects = [
  { id: 1, image: '/images/rektor.png', title: 'Rektor UNY Cup 2025', tag: 'Event Documentation' },
  { id: 2, image: '/images/kai.png', title: 'KAI Glow Night Run 2025', tag: 'Event Documentation' },
  { id: 3, image: '/images/funrun.png', title: 'UNY FUN RUN 2025', tag: 'Event Documentation' },
  { id: 4, image: '/images/grad.jpg', title: 'Graduation Moment 2024', tag: 'Event Documentation' },
  { id: 5, image: '/images/grad2.JPG', title: 'University Graduation', tag: 'Event Documentation' },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'pricing', 'project'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveSection(s); break; }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'project', label: 'Project' },
  ];

  return (
    <div className="overflow-x-hidden bg-[#fafafa]">

      {/* ========================================================
          NAVBAR
      ======================================================== */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'py-1.5 md:py-3' : 'py-3 md:py-5'}`}>
        <div className={`mx-3 md:mx-12 rounded-2xl transition-colors duration-300 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-transparent'}`}>
          <div className="flex flex-row items-center justify-between px-4 md:px-6 py-2.5 md:py-3">

            {/* Logo */}
            <a href="#home" className="relative flex items-center shrink-0 w-[130px] md:w-[170px] h-[38px] md:h-[70px]">
              <div className={`absolute inset-0 origin-left transition-transform duration-300 ease-out z-10 ${scrolled ? 'scale-[1.15] md:scale-95' : 'scale-[1.45] md:scale-110'}`}>
                <img
                  src="/images/logo.png"
                  alt="Swarna Works"
                  className={`absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                  src="/images/Swarna Yellow.png"
                  alt="Swarna Works"
                  className={`absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            </a>

            {/* Desktop & Mobile nav */}
            <nav className="flex items-center gap-0.5 md:gap-1 justify-end">
              {navLinks.map(l => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`relative font-montserrat text-[10px] md:text-sm font-semibold px-2.5 py-1.5 md:px-5 md:py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap ${activeSection === l.id
                    ? 'bg-[#F8A108] text-white shadow-md shadow-amber-200/50'
                    : scrolled
                      ? 'text-black/60 hover:text-black hover:bg-black/5'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK_ADMIN}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex ml-3 bg-[#F8A108] text-white font-montserrat font-semibold text-sm px-5 py-2 rounded-full hover:bg-orange-500 active:scale-95 transition-all shadow-lg shadow-amber-200/60 items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L0 24l6.335-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.724.973.993-3.628-.234-.373A9.818 9.818 0 1112 21.818z" />
                </svg>
                Hubungi Kami
              </a>
            </nav>

          </div>
        </div>
      </header>

      {/* ========================================================
          HERO — Clean two-column, no floating elements
      ======================================================== */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Amber background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8A108] via-[#FBBA3C] to-[#F8A108]" />
        {/* Textured bg image */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/background.png')" }}
        />
        {/* Bottom curve into white */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24" fill="#fafafa">
            <path d="M0,100 C360,0 1080,0 1440,100 Z" />
          </svg>
        </div>

        {/* Content grid */}
        <div className="relative z-[5] min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 pt-28 md:pt-0 pb-24 md:pb-0 max-w-7xl mx-auto gap-10">

          {/* Left: Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-black/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="font-montserrat text-[11px] font-bold text-white tracking-[3px] uppercase">Creative Agency</span>
            </div>

            <h1 className="font-montserrat font-black text-white leading-[0.9] tracking-tight mb-5">
              <span className="text-5xl md:text-6xl lg:text-7xl block">SWARNA</span>
              <span className="text-5xl md:text-6xl lg:text-7xl block">WORKS</span>
              <span className="text-xl md:text-2xl font-semibold text-white/70 tracking-normal mt-2 block normal-case leading-snug">
                Photography · Videography · Website
              </span>
            </h1>

            <p className="font-montserrat text-white/80 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
              Kami membantu bisnis kamu tampil lebih profesional. Satu agensi, ribuan solusi kreatif.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#pricing"
                className="bg-white text-[#F8A108] font-montserrat font-bold text-sm px-7 py-3.5 rounded-full shadow-xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Lihat Harga
              </a>
              <a
                href={WA_LINK_ADMIN}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 backdrop-blur-sm border border-white/30 text-white font-montserrat font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-black/30 active:scale-95 transition-all"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 justify-center md:justify-start">
              {[
                { num: '50+', label: 'Projects Selesai' },
                { num: '3', label: 'Layanan Kreatif' },
                { num: '100%', label: 'Client Puas' },
              ].map(s => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="font-montserrat font-black text-white text-2xl md:text-3xl leading-none">{s.num}</p>
                  <p className="font-montserrat text-white/60 text-[10px] mt-1 tracking-wide uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo — clipped to circle */}
          <div className="relative flex items-center justify-center order-1 md:order-2">
            {/* Ambient glow behind circle */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl scale-110" />
            {/* Circle container — clips the photo */}
            <div className="relative w-[300px] h-[300px] md:w-[440px] md:h-[440px] rounded-full overflow-hidden border-4 border-white/30 shadow-2xl shadow-black/30">
              <img
                src="/images/rinoo.png"
                alt="Swarna Works Team"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          HOW IT WORKS
      ======================================================== */}
      <section id="about" className="relative py-24 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="font-montserrat text-xs font-bold tracking-[4px] text-[#F8A108] uppercase">Cara Kerja Kami</span>
            <h2 className="font-montserrat font-black text-black text-4xl md:text-5xl mt-2 tracking-tight">
              Simple &amp; Transparan
            </h2>
            <p className="font-montserrat text-black/50 text-sm md:text-base mt-3 max-w-md mx-auto">
              Proses yang mudah dan jelas dari awal sampai selesai.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Contact',
                desc: 'Hubungi kami via WhatsApp. Ceritakan kebutuhan dan idemu — kami siap mendengarkan.',
                color: 'from-amber-50 to-orange-50',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F8A108" strokeWidth={1.8} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
              },
              {
                num: '02',
                title: 'Negotiate',
                desc: 'Kita diskusikan timeline, budget, dan detail proyek sampai semua sesuai ekspektasimu.',
                color: 'from-amber-50 to-yellow-50',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F8A108" strokeWidth={1.8} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
              {
                num: '03',
                title: 'Finish',
                desc: 'Kami deliver hasil akhir dengan cepat, rapi, dan sesuai janji. Zero hassle, full satisfaction.',
                color: 'from-orange-50 to-amber-50',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#F8A108" strokeWidth={1.8} className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div key={step.num} className={`relative p-8 rounded-3xl bg-gradient-to-br ${step.color} border border-[#F8A108]/15 group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-amber-100`}>
                {/* Step number */}
                <span className="font-montserrat font-black text-6xl text-[#F8A108]/10 absolute top-4 right-6 select-none leading-none">{step.num}</span>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md shadow-amber-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="font-montserrat font-black text-xl text-black mb-2">{step.title}</h3>
                <p className="font-montserrat text-sm text-black/55 leading-relaxed">{step.desc}</p>
                {/* Connector arrow (desktop) */}
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-[#F8A108] rounded-full items-center justify-center shadow-md">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#F8A108] to-orange-500 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-amber-200">
            <div className="text-center md:text-left">
              <p className="font-montserrat font-black text-white text-2xl md:text-3xl">Siap mulai project?</p>
              <p className="font-montserrat text-white/75 text-sm mt-1">Konsultasi gratis, tanpa komitmen.</p>
            </div>
            <a
              href={WA_LINK_ADMIN}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white text-[#F8A108] font-montserrat font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all text-sm"
            >
              Chat Sekarang →
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          PRICING
      ======================================================== */}
      <section id="pricing" className="relative py-24 bg-white overflow-hidden">
        {/* Subtle bg */}
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('/images/background.png')" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-montserrat text-xs font-bold tracking-[4px] text-[#F8A108] uppercase">Paket Layanan</span>
            <h2 className="font-montserrat font-black text-black text-4xl md:text-5xl mt-2 tracking-tight">Get an Offer</h2>
            <p className="font-montserrat text-black/50 text-sm mt-3 max-w-sm mx-auto">
              Harga transparan, kualitas terjamin. Pilih paket yang paling cocok.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-stretch">

            {/* Card: Photography */}
            <PricingCard
              title="Photography"
              tagline="Dari social content hingga brand storytelling"
              price="Rp200.000"
              features={['Photographer & Editor Profesional', 'File Tersimpan Aman', 'Panduan Pose', 'File Siap Pakai Semua Device']}
              waLink={WA_LINK_PHOTO}
            />

            {/* Card: Videography — featured */}
            <PricingCard
              title="Videography"
              tagline="Dari iklan sosial hingga video korporat"
              price="Rp300.000"
              features={['Videografer, Editor & Scriptwriter', 'Peralatan Terbaik', 'Tim Produksi Berpengalaman', 'Creative Brief Lengkap']}
              waLink={WA_LINK_PHOTO}
              featured
            />

            {/* Card: Website */}
            <PricingCard
              title="Website"
              tagline="Landing page cepat & responsif"
              price="Rp800.000"
              features={['Desain Responsif & Brand-Compliant', 'SEO Dasar & Analytics', 'Delivery 3–7 Hari Kerja', 'Integrasi Pembayaran / WA', 'Hosting & Domain', 'SSL Gratis']}
              waLink={WA_LINK_ADMIN}
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          PROJECT GALLERY
      ======================================================== */}
      <section id="project" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-[#2d1500] to-[#1a0a00]" />
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/background.png')" }} />

        <div className="relative z-10">
          <div className="text-center mb-14 px-6">
            <span className="font-montserrat text-xs font-bold tracking-[4px] text-[#F8A108] uppercase">Portfolio</span>
            <h2 className="font-montserrat font-black text-white text-4xl md:text-6xl mt-2 tracking-tight">Our Recent</h2>
            <h2 className="font-montserrat font-black text-[#F8A108] text-5xl md:text-7xl mt-1 tracking-tighter leading-none">Project</h2>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={16}
              slidesPerView={1.15}
              centeredSlides
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
              navigation={{ nextEl: '.swiper-btn-next', prevEl: '.swiper-btn-prev' }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="pb-4"
            >
              {projects.map(item => (
                <SwiperSlide key={item.id}>
                  {({ isActive }) => (
                    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ paddingBottom: '133.33%' }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="eager"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        {/* Tag */}
                        <div className="absolute top-4 left-4 bg-[#F8A108] text-white font-montserrat font-bold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full">
                          {item.tag}
                        </div>
                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-montserrat font-black text-white text-lg leading-tight uppercase">{item.title}</h3>
                          <div className="mt-2 w-8 h-0.5 bg-[#F8A108] rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="swiper-btn-prev w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-[#F8A108] transition-colors flex items-center justify-center group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <div className="swiper-custom-pagination flex gap-2" />
              <button className="swiper-btn-next w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-[#F8A108] transition-colors flex items-center justify-center group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FOOTER
      ======================================================== */}
      <footer className="relative bg-[#0d0d0d] pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            {/* Brand col */}
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/logo.png" alt="Swarna Works" className="h-12 w-auto brightness-0 invert" />
                <h3 className="font-montserrat font-black text-white text-xl tracking-tight">Swarna Works</h3>
              </div>
              <p className="font-montserrat text-white/40 text-sm leading-relaxed">
                Creative agency yang menghadirkan solusi visual terbaik untuk bisnis Anda. Photography, Videography, Website.
              </p>
              {/* Social */}
              <div className="flex gap-3 mt-6">
                {[
                  { label: 'Instagram', href: 'https://instagram.com/swarnaworks', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1 0 2.881 1.44 1.44 0 0 1 0-2.881z" /> },
                  { label: 'TikTok', href: 'https://tiktok.com/@swarnaworks', icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 3.13-2.56 5.65-5.69 5.65-3.1 0-5.63-2.5-5.63-5.63 0-2.6 1.83-4.8 4.31-5.46v4.25a1.41 1.41 0 0 0-1.28 1.21c-.04.42.1.84.41 1.15.31.31.74.45 1.16.41 1.26-.14 1.98-1.57 1.54-2.73V.02z" /> },
                  { label: 'YouTube', href: 'https://www.youtube.com/@SwarnaWorks', icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
                  { label: 'WhatsApp', href: WA_LINK_ADMIN, icon: <><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L0 24l6.335-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.724.973.993-3.628-.234-.373A9.818 9.818 0 1112 21.818z" /></> },
                ].map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/40 hover:bg-[#F8A108] hover:text-white transition-all duration-200">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">{s.icon}</svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links col */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              <div>
                <p className="font-montserrat font-bold text-white/30 text-xs tracking-[3px] uppercase mb-4">Navigasi</p>
                <div className="flex flex-col gap-3">
                  {navLinks.map(l => (
                    <a key={l.id} href={`#${l.id}`} className="font-montserrat text-white/55 text-sm hover:text-[#F8A108] transition-colors">{l.label}</a>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-montserrat font-bold text-white/30 text-xs tracking-[3px] uppercase mb-4">Layanan</p>
                <div className="flex flex-col gap-3">
                  {['Photography', 'Videography', 'Website'].map(s => (
                    <a key={s} href="#pricing" className="font-montserrat text-white/55 text-sm hover:text-[#F8A108] transition-colors">{s}</a>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-montserrat font-bold text-white/30 text-xs tracking-[3px] uppercase mb-4">Kontak</p>
                <div className="flex flex-col gap-3">
                  <a href={WA_LINK_ADMIN} target="_blank" rel="noopener noreferrer"
                    className="font-montserrat text-white/55 text-sm hover:text-[#F8A108] transition-colors flex items-center gap-2">
                    <span className="text-[#F8A108]">→</span> WhatsApp
                  </a>
                  <a href="mailto:hello@swarnaworks.com"
                    className="font-montserrat text-white/55 text-sm hover:text-[#F8A108] transition-colors flex items-center gap-2">
                    <span className="text-[#F8A108]">→</span> Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-montserrat text-white/25 text-xs text-center">
              © 2025 Swarna Works. All rights reserved.
            </p>
            <p className="font-montserrat text-white/25 text-xs text-center">
              Made with ❤️ in Indonesia
            </p>
          </div>
        </div>
      </footer>

    </div>
  );

  /* ============================================================
     PRICING CARD COMPONENT
  ============================================================ */
  function PricingCard({
    title,
    tagline,
    price,
    features,
    waLink,
    featured = false,
  }: {
    title: string;
    tagline: string;
    price: string;
    features: string[];
    waLink: string;
    featured?: boolean;
  }) {
    return (
      <div className={`relative rounded-[2rem] p-8 flex flex-col font-montserrat transition-all duration-300 hover:-translate-y-2 h-full ${featured
        ? 'bg-gradient-to-b from-[#F8A108] to-orange-500 shadow-2xl shadow-amber-300/40 scale-[1.03]'
        : 'bg-white border border-black/8 shadow-lg hover:shadow-xl'
        }`}>
        {featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-black tracking-[3px] uppercase px-5 py-1.5 rounded-full shadow-xl whitespace-nowrap">
            ✦ Most Popular
          </div>
        )}
        {/* Icon */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${featured ? 'bg-white/20' : 'bg-[#F8A108]/10'}`}>
          {title === 'Photography' && (
            <svg viewBox="0 0 24 24" fill="none" stroke={featured ? 'white' : '#F8A108'} strokeWidth={1.8} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
          )}
          {title === 'Videography' && (
            <svg viewBox="0 0 24 24" fill="none" stroke={featured ? 'white' : '#F8A108'} strokeWidth={1.8} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
          )}
          {title === 'Website' && (
            <svg viewBox="0 0 24 24" fill="none" stroke={featured ? 'white' : '#F8A108'} strokeWidth={1.8} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
            </svg>
          )}
        </div>

        <h3 className={`text-2xl font-extrabold mb-1 ${featured ? 'text-white' : 'text-black'}`}>{title}</h3>
        <p className={`text-xs mb-4 leading-relaxed ${featured ? 'text-white/70' : 'text-black/50'}`}>{tagline}</p>

        <div className="mb-6">
          <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${featured ? 'text-white/60' : 'text-[#F8A108]/80'}`}>Mulai dari</p>
          <p className={`text-3xl font-black ${featured ? 'text-white' : 'text-[#F8A108]'}`}>{price}</p>
        </div>

        <div className={`w-full h-px mb-6 ${featured ? 'bg-white/20' : 'bg-black/8'}`} />

        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {features.map(f => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${featured ? 'bg-white/20' : 'bg-[#F8A108]/10'}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke={featured ? 'white' : '#F8A108'} strokeWidth={2.5} className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className={featured ? 'text-white/85' : 'text-black/65'}>{f}</span>
            </li>
          ))}
        </ul>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3.5 rounded-xl font-extrabold text-sm text-center transition-all active:scale-95 hover:-translate-y-0.5 shadow-lg ${featured
            ? 'bg-white text-[#F8A108] hover:shadow-white/30'
            : 'bg-[#F8A108] text-white hover:bg-orange-500 shadow-amber-200/50'
            }`}
        >
          Hubungi Kami
        </a>
      </div>
    );
  }
}