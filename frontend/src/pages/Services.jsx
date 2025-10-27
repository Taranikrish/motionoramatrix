

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Services({ isEmbedded = false }) {
  const navigate = useNavigate();
  if (isEmbedded) {
    return (
      <div className="flex flex-col bg-black relative">
        {/* Subtle background effect */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        </div>
        <div className="flex-1 relative z-10">
          <div className="flex h-full grow flex-col">
          <div className="mx-auto w-full max-w-4xl px-4 py-5 sm:px-6 lg:px-8">
            <main className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
              {/* Hero Section */}
              <section className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl">Our Services</h1>
                <h2 className="max-w-2xl text-white/80 text-base font-normal leading-normal md:text-lg">Transforming your vision into reality with professional video editing and cutting-edge web development solutions.</h2>
              </section>

              {/* Services Grid */}
              <section className="flex flex-col gap-6">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">What We Offer</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {/* Video Editing Service */}
                  <div className="group flex flex-col gap-6 rounded-xl border border-white/20 p-2 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Video Editing</h3>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                      Professional video editing services that bring your stories to life.
                    </p>
                    <ul className="space-y-2 text-white/60">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Cinematic and storytelling Edits
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Color grading & correction
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Motion graphics
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        SFX, Trailers and Short Promos
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Wedding and Event films
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Corporate and Brand Videos
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Social Media Reels and Content Edits 
                      </li>
                    </ul>
                  </div>

                  {/* Web Development Service */}
                  <div className="group flex flex-col gap-6 rounded-xl border border-white/20 p-2 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Web Development</h3>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                      Modern, responsive websites built with cutting-edge technologies. From simple landing pages to complex web applications, we create digital experiences that engage and convert.
                    </p>
                    <ul className="space-y-2 text-white/60">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Responsive design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        React & modern frameworks
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Backend API development
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Performance optimization
                      </li>
                    </ul>
                  </div>
                  {/* {grahic design} */}
                   <div className="group flex flex-col gap-6 rounded-xl border border-white/20 p-2 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Graphic Design</h3>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                     Every color, line, and shape matters. We turn ideas into visuals that speak — bold, beautiful, and perfectly in sync with your brand’s personality.
                    </p>
                    <ul className="space-y-2 text-white/60">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Brand Identity & Logo Design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Poster, Flyer & Event Design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Youtube Thumbnail Design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Instagram Cover Picture Design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Custom Creative Artwork
                      </li>
                    </ul>
                  </div>
                  {/* Extra services */}
                   
                </div>
              </section>
              <div className="group flex flex-col gap-6 rounded-xl border border-white/20 p-8 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow">
                    <div className="flex justify-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold flex justify-center items-center text-white">Extra Services</h3>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                                We also offer a range of extra services to help you bring your vision to life. 
                    </p>
                    <ul className="space-y-2 text-white/60 md:grid md:grid-cols-2 md:justify-center md:items-center">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Social Media Managment
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                            Ads Management
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Youtube Handling & Management
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Instagram Handling & Management
                      </li>
                    </ul>
                  </div>

              {/* Process Section */}
              <section className="flex flex-col gap-6">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">What make us Different</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="flex flex-col gap-4 rounded-xl border border-white/20 p-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Discovery</h3>
                    <p className="text-white/70">We start by understanding your vision, goals, and requirements through detailed consultation.</p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl border border-white/20 p-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Creation</h3>
                    <p className="text-white/70">Our team brings your project to life using industry-standard tools and creative expertise.</p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl border border-white/20 p-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Delivery</h3>
                    <p className="text-white/70">On-schedule delivery without compromise on quality.</p>
                  </div>
                </div>
              </section>
              

              {/* CTA Section */}
              <section className="flex flex-col items-center gap-6 rounded-xl border border-white/30 bg-white/5 p-8 text-center">
                <h2 className="text-white text-2xl font-bold">Ready to Start Your Project?</h2>
                <p className="text-white/70 max-w-md">Let's discuss your vision and bring it to life with our professional services.</p>
                <button onClick={() => navigate('/contact')} className="rounded-lg bg-white px-6 py-3 font-bold text-black transition-all hover:shadow-glow">
                  Get Started!
                </button>
              </section>
            </main>
          </div>
        </div>
      </div>

    </div>
  );
}

  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      <NavBar />
      <div className="flex-1 pt-20">
        {/* Subtle background effect */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 flex h-full grow flex-col">
          <div className="mx-auto w-full max-w-4xl px-4 py-5 sm:px-6 lg:px-8">
            <main className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
              {/* Hero Section */}
              <section className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl">Our Services</h1>
                <h2 className="max-w-2xl text-white/80 text-base font-normal leading-normal md:text-lg">Transforming your vision into reality with professional video editing and cutting-edge web development solutions.</h2>
              </section>

              {/* Services Grid */}
              <section className="flex flex-col gap-6">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">What We Offer</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {/* Video Editing Service */}
                  <div className="group flex flex-col gap-6 rounded-xl border border-white/20 p-2 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Video Editing</h3>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                      Professional video editing services that bring your stories to life.
                    </p>
                    <ul className="space-y-2 text-white/60">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Cinematic and storytelling Edits
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Color grading & correction
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Motion graphics
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        SFX, Trailers and Short Promos
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Wedding and Event films
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Corporate and Brand Videos
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Social Media Reels and Content Edits
                      </li>
                    </ul>
                  </div>

                  {/* Web Development Service */}
                  <div className="group flex flex-col gap-6 rounded-xl border border-white/20 p-2 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Web Development</h3>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                      Modern, responsive websites built with cutting-edge technologies. From simple landing pages to complex web applications, we create digital experiences that engage and convert.
                    </p>
                    <ul className="space-y-2 text-white/60">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Responsive design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        React & modern frameworks
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Backend API development
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Performance optimization
                      </li>
                    </ul>
                  </div>
                  {/* {grahic design} */}
                   <div className="group flex flex-col gap-6 rounded-xl border border-white/20 p-2 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Graphic Design</h3>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                     Every color, line, and shape matters. We turn ideas into visuals that speak — bold, beautiful, and perfectly in sync with your brand’s personality.
                    </p>
                    <ul className="space-y-2 text-white/60">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Brand Identity & Logo Design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Poster, Flyer & Event Design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Youtube Thumbnail Design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Instagram Cover Picture Design
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Custom Creative Artwork
                      </li>
                    </ul>
                  </div>
                  {/* Extra services */}
                   
                </div>
              </section>
              <div className="group flex flex-col gap-6 rounded-xl border border-white/20 p-8 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow">
                    <div className="flex justify-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold flex justify-center items-center text-white">Extra Services</h3>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                                We also offer a range of extra services to help you bring your vision to life. 
                    </p>
                    <ul className="space-y-2 text-white/60 md:grid md:grid-cols-2 md:justify-center md:items-center">
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Social Media Managment
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                            Ads Management
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Youtube Handling & Management
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-white" fill="white" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Instagram Handling & Management
                      </li>
                    </ul>
                  </div>

              {/* Process Section */}
              <section className="flex flex-col gap-6">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">What make us Different</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="flex flex-col gap-4 rounded-xl border border-white/20 p-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Discovery</h3>
                    <p className="text-white/70">We start by understanding your vision, goals, and requirements through detailed consultation.</p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl border border-white/20 p-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Creation</h3>
                    <p className="text-white/70">Our team brings your project to life using industry-standard tools and creative expertise.</p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl border border-white/20 p-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Delivery</h3>
                    <p className="text-white/70">On-schedule delivery without compromise on quality.</p>
                  </div>
                </div>
              </section>


              {/* CTA Section */}
              <section className="flex flex-col items-center gap-6 rounded-xl border border-white/30 bg-white/5 p-8 text-center">
                <h2 className="text-white text-2xl font-bold">Ready to Start Your Project?</h2>
                <p className="text-white/70 max-w-md">Let's discuss your vision and bring it to life with our professional services.</p>
                <button onClick={()=>{navigate("/contact")}} className="rounded-lg bg-white px-6 py-3 font-bold text-black transition-all hover:shadow-glow">
                  Get Started!
                </button>
              </section>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
