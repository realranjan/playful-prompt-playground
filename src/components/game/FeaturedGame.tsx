
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GameInfo } from './GameCard';
import { Link } from 'react-router-dom';
import { Play, Trophy, Download } from 'lucide-react';

interface FeaturedGameProps {
  game: GameInfo;
}

const FeaturedGame: React.FC<FeaturedGameProps> = ({ game }) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl neon-border scanline">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10"></div>
      <img 
        src={game.image} 
        alt={game.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
        <div className="space-y-4 max-w-xl">
          <Badge className="bg-retro-pink text-white mb-2">Featured Game</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white retro-text animate-pixel-shift">{game.title}</h2>
          <p className="text-white/80 line-clamp-2 md:line-clamp-3">
            Embark on an epic pixel adventure filled with challenging puzzles, fierce battles, 
            and a captivating storyline. Collect rare items and climb the global leaderboard!
          </p>
          
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <Badge variant="outline" className="bg-muted/50 backdrop-blur-sm">
              {game.category}
            </Badge>
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4 text-retro-yellow" />
              <span className="text-white/80 text-sm">12k Players</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4 text-retro-green" />
              <span className="text-white/80 text-sm">50k Downloads</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <Button className="bg-retro-pink hover:bg-retro-pink/90 text-white">
              <Play className="mr-2 h-4 w-4" /> Play Now
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGame;
