import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer';
import Typewriter from 'typewriter-effect';
import VideoCase from '../components/VideoCase';
import ReelCarousel from '../components/ReelCarousel';
import Clients from '../components/Clients';
import Services from './Services.jsx';


export default function Home() {
  const navigate = useNavigate();
  const { isAdmin } = useAdmin();

  const handleSeeMore = (type) => {
    navigate(`/see-more/${type}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black relative">
        <div className='h-64 sm:h-80 md:h-96 md:flex md:justify-end bg-cover bg-center relative'>

                <video src="/loop 02.mp4" autoPlay playsInline muted loop className='h-full opacity-80 saturate-150   '></video>
            </div>
        <NavBar/>
        <div className='flex-1'>
            

            <div className='absolute text-2xl text-start sm:text-3xl md:text-4xl text-white top-20 sm:top-32 md:top-50 left-4 sm:left-12 md:left-24'>
                <div className="font-Arial font-bold">MOTIONORA MATRIX,</div>
                <div className="font-Arial text-2xl">
                    <Typewriter
                    className="font-Arial "
                    options={{
                        strings: ['Your Vision Our Matrix'],
                        autoStart: true,
                        loop: true,
                        delay: 150,
                        deleteSpeed: 50,
                        pauseFor: 1000,
                        cursor: "",
                        fontSize: "12px"
                    }}
                />
                </div>
            </div>
        </div>
        <div className="relative p-8 z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-4" style={{ textShadow: '0 0 10px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,1)' }}>
            Long Videos
          </h2>
          <VideoCase/>
          <div
            className="absolute bottom-4 right-0 transform -translate-x-1/2 text-white text-lg cursor-pointer hover:text-gray-300 transition-colors"
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.8)'}}
            onClick={() => handleSeeMore('videos')}
          >
            See More →
          </div>

        </div>
        <div className="relative p-8 z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-20" style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' }}>
            Reel Videos
          </h2>
          <ReelCarousel/>
          <div
            className="absolute bottom-4 right-0 transform -translate-x-1/2 text-white text-lg cursor-pointer hover:text-gray-300 transition-colors"
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' }}
            onClick={() => handleSeeMore('reels')}
          >
            See More →
          </div>

        </div>
        <div className="relative p-8 mt-20 z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-4" style={{ textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' }}>
            Our Clients
          </h2>
          <Clients/>
        </div>
        <div>
          <Services isEmbedded={true}/>
        </div>

        <Footer/>
    </div>
  );
}
