import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-black relative">
      {/* Subtle background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>
      <NavBar />
      <div className="flex-1 pt-20 relative z-10">
        <div className="flex h-full grow flex-col">
          <div className="mx-auto w-full max-w-4xl px-4 py-5 sm:px-6 lg:px-8">
            <main className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
              {/* Hero Section */}
              <section className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl">About Motionoramatrix</h1>
                <h2 className="max-w-2xl text-white/80 text-base font-normal leading-normal md:text-lg">Transforming your vision into reality with professional video editing, cutting-edge web development, and creative graphic design solutions that engage and convert.</h2>
              </section>
              {/* Media Frame */}
              <section className="flex justify-center">
                <div className="relative w-full max-w-lg rounded-xl p-1.5 border border-primary/30 shadow-[0_0_30px_-5px_theme(colors.primary)]">
                  <img className="w-full rounded-lg aspect-video object-contain" alt="Motionora Matrix logo" src="/mm2 png.png" />
                </div>
              </section>
              {/* Typography Block */}
              <section className="flex flex-col gap-4">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Our Philosophy</h2>
                <div className="flex flex-col gap-4 text-white/80 text-base font-normal leading-relaxed">
                  <p>We believe that every frame tells a story. Our passion lies in weaving together visuals and sound to create not just a video, but an experience. From the initial concept to the final color grade, our approach is meticulous and driven by a deep understanding of narrative pacing and emotional impact. Our journey in filmmaking has been one of constant evolution, always pushing the boundaries of technology and creativity to bring visionary ideas to life.</p>
                  <p>Our process is collaborative and transparent. We work closely with clients to understand their vision and goals, ensuring that the final product not only meets but exceeds expectations. Whether it's a high-energy commercial, a documentary with a powerful message, or a cinematic brand film, we pour our expertise and creative energy into every project, crafting motion that resonates and endures.</p>
                </div>
              </section>
              {/* Interactive Skill Cards */}
              <section className="flex flex-col gap-6">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">What We Offer</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="group flex flex-col gap-2 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-glow">
                    <h3 className="text-lg font-bold text-white">Video Editing</h3>
                    <p className="text-sm text-white/70">Professional video editing services that bring your stories to life.</p>
                  </div>
                  <div className="group flex flex-col gap-2 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-glow">
                    <h3 className="text-lg font-bold text-white">Web Development</h3>
                    <p className="text-sm text-white/70">Modern, responsive websites built with cutting-edge technologies.</p>
                  </div>
                  <div className="group flex flex-col gap-2 rounded-xl border border-white/20 p-6 transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-glow">
                    <h3 className="text-lg font-bold text-white">Graphic Design</h3>
                    <p className="text-sm text-white/70">Every color, line, and shape matters. We turn ideas into visuals that speak.</p>
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
