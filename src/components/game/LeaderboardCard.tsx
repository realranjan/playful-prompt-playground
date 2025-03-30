
import React from 'react';
import { Trophy } from 'lucide-react';

export interface LeaderboardEntry {
  rank: number;
  username: string;
  avatar: string;
  score: number;
  isCurrentUser?: boolean;
}

interface LeaderboardCardProps {
  entry: LeaderboardEntry;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ entry }) => {
  const rankColors = {
    1: 'text-retro-yellow',
    2: 'text-gray-300',
    3: 'text-retro-orange',
  };

  const rankIcon = (rank: number) => {
    if (rank <= 3) {
      return <Trophy className={`h-5 w-5 ${rankColors[rank as 1 | 2 | 3]}`} />;
    }
    return <span className="text-white/70 font-mono">{rank}</span>;
  };

  return (
    <div className={`flex items-center p-3 rounded-lg 
                    ${entry.isCurrentUser ? 'bg-retro-purple/20 neon-border' : 'bg-muted hover:bg-muted/80'} 
                    transition-colors`}>
      <div className="flex items-center justify-center w-8 mr-3">
        {rankIcon(entry.rank)}
      </div>
      
      <div className="flex items-center flex-1">
        <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
          <img src={entry.avatar} alt={entry.username} className="w-full h-full object-cover" />
        </div>
        <span className={`font-medium ${entry.isCurrentUser ? 'text-white' : 'text-white/80'}`}>
          {entry.username}
        </span>
      </div>
      
      <div className="font-mono font-bold text-retro-cyan">
        {entry.score.toLocaleString()}
      </div>
    </div>
  );
};

export default LeaderboardCard;
