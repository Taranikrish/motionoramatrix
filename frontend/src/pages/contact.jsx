import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      {/* Subtle background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      </div>
      <NavBar />
      <div className="flex-1 pt-20 relative z-10">
        <div className="flex h-full grow flex-col">
          <div className="mx-auto w-full max-w-4xl px-4 py-5 sm:px-6 lg:px-8">
            <main className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
              {/* Hero Section */}
              <section className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl">Get In Touch</h1>
                <h2 className="max-w-2xl text-white/80 text-base font-normal leading-normal md:text-lg">Ready to bring your vision in our Matrix? Let's connect and discuss your next project.</h2>
              </section>

              {/* Contact Information */}
              <section className="flex flex-col gap-8">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {/* Email */}
                  <div className="group flex flex-col gap-4 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Email</h3>
                    <a href="mailto:motionoramatrix@gmail.com" className="text-blue-600/70 hover:text-white transition-colors">
                      motionoramatrix@gmail.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="group flex flex-col gap-4 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Phone</h3>
                    <a href="tel:+919373405677" className="text-blue-600/70 hover:text-white transition-colors">
                      +91 93734 05677
                    </a>
                  </div>

                  {/* Instagram DM */}
                  <div className="group flex flex-col gap-4 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-glow text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Instagram DM</h3>
                    <a href="https://www.instagram.com/motionoramatrix?igsh=MTM1djQ4MGUxand5NA==" target="_blank" rel="noopener noreferrer" className="text-blue-600/70 hover:text-white transition-colors">
                      motionoramatrix
                    </a>
                  </div>
                </div>
              </section>

              {/* Contact Form Placeholder */}
              <section className="flex flex-col gap-6">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Send us a Message</h2>
                <div className="rounded-xl border border-white/20 bg-white/5 p-8">
                  <p className="text-white/70 text-center">
                    Contact form coming soon! For now, please reach out using the contact information above.
                  </p>
                </div>
              </section>

              {/* Business Hours */}
              <section className="flex flex-col gap-6">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Business Hours</h2>
                <div className="rounded-xl border border-white/20 p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="text-white font-bold mb-2">Monday - Friday</h3>
                      <p className="text-white/70">9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">Saturday - Sunday</h3>
                      <p className="text-white/70">By appointment only</p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}