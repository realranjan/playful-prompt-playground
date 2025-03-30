
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export interface GameInfo {
  id: string;
  title: string;
  image: string;
  developer: string;
  category: string;
  rating: number;
  price: string;
  isFeatured?: boolean;
}

interface GameCardProps {
  game: GameInfo;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link 
      to={`/game/${game.id}`}
      className="group relative overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="relative aspect-[4/3] overflow-hidden pixel-corners neon-border scanline">
        <img 
          src={game.image} 
          alt={game.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
        {game.isFeatured && (
          <Badge className="absolute top-3 left-3 bg-retro-yellow text-black font-bold">
            Featured
          </Badge>
        )}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm py-1 px-2 rounded-full">
          <Star className="h-3 w-3 fill-retro-yellow text-retro-yellow" />
          <span className="text-xs font-medium">{game.rating}</span>
        </div>
      </div>
      
      <div className="space-y-2 p-2">
        <h3 className="font-bold text-white line-clamp-1">{game.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-white/60 text-sm">{game.developer}</p>
          <Badge variant="outline" className="bg-muted text-white/80 text-xs">
            {game.category}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-retro-cyan">{game.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
