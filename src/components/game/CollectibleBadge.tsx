
import React from 'react';

export interface BadgeInfo {
  id: string;
  name: string;
  image: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  isCollected: boolean;
}

interface CollectibleBadgeProps {
  badge: BadgeInfo;
}

const CollectibleBadge: React.FC<CollectibleBadgeProps> = ({ badge }) => {
  const rarityColors = {
    common: 'border-white/30 bg-white/10',
    rare: 'border-retro-blue bg-retro-blue/10',
    epic: 'border-retro-purple bg-retro-purple/10',
    legendary: 'border-retro-orange bg-retro-orange/10'
  };

  const glowColors = {
    common: '',
    rare: 'shadow-sm shadow-retro-blue/30',
    epic: 'shadow-sm shadow-retro-purple/30',
    legendary: 'shadow-md shadow-retro-orange/30 animate-glow'
  };

  return (
    <div className={`relative group ${!badge.isCollected && 'opacity-70 grayscale'}`}>
      <div 
        className={`w-16 h-16 rounded-full border-2 ${rarityColors[badge.rarity]} 
                    ${glowColors[badge.rarity]} overflow-hidden flex items-center justify-center
                    transition-transform duration-300 group-hover:scale-110 pixel-corners`}
      >
        <img src={badge.image} alt={badge.name} className="w-12 h-12" />
      </div>
      <p className="mt-2 text-xs text-center text-white/80 font-medium">{badge.name}</p>
      <span 
        className={`absolute -top-1 -right-1 w-4 h-4 rounded-full
                    ${badge.isCollected ? 'bg-retro-green' : 'bg-white/20'}`}
      ></span>
    </div>
  );
};

export default CollectibleBadge;
