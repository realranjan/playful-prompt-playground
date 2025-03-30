
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-retro-pink flex items-center justify-center pixel-corners animate-glow">
              <span className="text-white font-bold text-sm">RA</span>
            </div>
            <span className="text-white font-bold text-xl hidden md:block">
              Retro<span className="text-retro-pink">Arcade</span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/games">Games</NavLink>
          <NavLink href="/leaderboards">Leaderboards</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-white/20 overflow-hidden">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link 
      to={href} 
      className="text-white/70 hover:text-white transition-colors px-3 py-2 text-sm font-medium"
    >
      {children}
    </Link>
  );
};

export default Navbar;
