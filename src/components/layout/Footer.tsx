
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background/80 backdrop-blur-lg border-t border-white/10 mt-24">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-retro-pink flex items-center justify-center pixel-corners">
                <span className="text-white font-bold text-sm">RA</span>
              </div>
              <span className="text-white font-bold text-xl">
                Retro<span className="text-retro-pink">Arcade</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm">
              The ultimate retro gaming platform. Play, collect, and compete in your favorite pixel art games.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <FooterLink href="/games">All Games</FooterLink>
              <FooterLink href="/categories">Categories</FooterLink>
              <FooterLink href="/collections">Collections</FooterLink>
              <FooterLink href="/leaderboards">Leaderboards</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/developers">For Developers</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
              <FooterLink href="/support">Support</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <FooterLink href="/discord">Discord</FooterLink>
              <FooterLink href="/twitter">Twitter</FooterLink>
              <FooterLink href="/github">GitHub</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} RetroArcade. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/cookies">Cookies</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link 
        to={href} 
        className="text-white/60 hover:text-white transition-colors text-sm"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
