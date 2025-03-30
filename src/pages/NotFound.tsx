
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="relative w-40 h-40 mx-auto mb-6 animate-float">
            <div className="absolute inset-0 bg-retro-pink rounded-lg transform rotate-3 animate-pulse"></div>
            <div className="absolute inset-0 bg-retro-blue rounded-lg transform -rotate-3 animate-pulse delay-75"></div>
            <div className="relative flex items-center justify-center w-full h-full bg-background rounded-lg z-10">
              <h1 className="text-7xl font-bold text-white retro-text">404</h1>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4 retro-text">
            Game Not Found
          </h2>
          <p className="text-white/70 max-w-md mx-auto mb-8">
            The game level you're looking for appears to be in another castle. 
            Let's get you back to the games you can play!
          </p>
          
          <Button asChild className="bg-retro-cyan hover:bg-retro-cyan/90 text-black">
            <Link to="/">Return to Home Screen</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
