
import { GameInfo } from '@/components/game/GameCard';
import { CategoryInfo } from '@/components/game/CategoryCard';
import { BadgeInfo } from '@/components/game/CollectibleBadge';
import { LeaderboardEntry } from '@/components/game/LeaderboardCard';

// Game data
export const gamesData: GameInfo[] = [
  {
    id: '1',
    title: 'Pixel Quest: Crystal Caverns',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop',
    developer: 'RetroStudios',
    category: 'Adventure',
    rating: 4.8,
    price: 'Free',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Neon Drift Racing',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop',
    developer: 'SpeedPixel',
    category: 'Racing',
    rating: 4.5,
    price: '$4.99'
  },
  {
    id: '3',
    title: 'Cosmic Defenders',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2670&auto=format&fit=crop',
    developer: 'GalacticGames',
    category: 'Shooter',
    rating: 4.2,
    price: 'Free'
  },
  {
    id: '4',
    title: 'Dungeon Master 16-bit',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop',
    developer: 'PixelWizards',
    category: 'RPG',
    rating: 4.9,
    price: '$6.99'
  },
  {
    id: '5',
    title: 'Retro Platformer Pro',
    image: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=2672&auto=format&fit=crop',
    developer: 'JumpStudios',
    category: 'Platformer',
    rating: 4.7,
    price: '$3.99'
  },
  {
    id: '6',
    title: 'Puzzle Blocks Mania',
    image: 'https://images.unsplash.com/photo-1595058582207-13c57ffbc57f?q=80&w=2564&auto=format&fit=crop',
    developer: 'BrainGames',
    category: 'Puzzle',
    rating: 4.4,
    price: 'Free'
  },
  {
    id: '7',
    title: 'Cyberpunk Ninja',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2574&auto=format&fit=crop',
    developer: 'FutureByte',
    category: 'Action',
    rating: 4.6,
    price: '$5.99'
  },
  {
    id: '8',
    title: 'Retro City Tycoon',
    image: 'https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?q=80&w=2670&auto=format&fit=crop',
    developer: 'BuilderGames',
    category: 'Simulation',
    rating: 4.3,
    price: '$2.99'
  }
];

// Categories
export const categoriesData: CategoryInfo[] = [
  {
    id: 'adventure',
    name: 'Adventure',
    icon: 'https://cdn-icons-png.flaticon.com/512/5776/5776635.png',
    color: 'retro-blue',
    gameCount: 124
  },
  {
    id: 'action',
    name: 'Action',
    icon: 'https://cdn-icons-png.flaticon.com/512/2653/2653550.png',
    color: 'retro-red',
    gameCount: 98
  },
  {
    id: 'rpg',
    name: 'RPG',
    icon: 'https://cdn-icons-png.flaticon.com/512/5201/5201244.png',
    color: 'retro-purple',
    gameCount: 87
  },
  {
    id: 'puzzle',
    name: 'Puzzle',
    icon: 'https://cdn-icons-png.flaticon.com/512/4727/4727416.png',
    color: 'retro-green',
    gameCount: 156
  },
  {
    id: 'racing',
    name: 'Racing',
    icon: 'https://cdn-icons-png.flaticon.com/512/1218/1218375.png',
    color: 'retro-yellow',
    gameCount: 67
  },
  {
    id: 'shooter',
    name: 'Shooter',
    icon: 'https://cdn-icons-png.flaticon.com/512/1693/1693985.png',
    color: 'retro-orange',
    gameCount: 76
  },
  {
    id: 'platformer',
    name: 'Platformer',
    icon: 'https://cdn-icons-png.flaticon.com/512/686/686589.png',
    color: 'retro-cyan',
    gameCount: 92
  },
  {
    id: 'simulation',
    name: 'Simulation',
    icon: 'https://cdn-icons-png.flaticon.com/512/6788/6788365.png',
    color: 'retro-pink',
    gameCount: 43
  },
];

// Collectible Badges
export const badgesData: BadgeInfo[] = [
  {
    id: 'badge1',
    name: 'First Win',
    image: 'https://cdn-icons-png.flaticon.com/512/3176/3176355.png',
    rarity: 'common',
    isCollected: true
  },
  {
    id: 'badge2',
    name: 'Speed Runner',
    image: 'https://cdn-icons-png.flaticon.com/512/5404/5404466.png',
    rarity: 'rare',
    isCollected: true
  },
  {
    id: 'badge3',
    name: 'Pixel Master',
    image: 'https://cdn-icons-png.flaticon.com/512/2371/2371320.png',
    rarity: 'epic',
    isCollected: false
  },
  {
    id: 'badge4',
    name: 'Legend',
    image: 'https://cdn-icons-png.flaticon.com/512/2928/2928883.png',
    rarity: 'legendary',
    isCollected: false
  },
  {
    id: 'badge5',
    name: 'Top Player',
    image: 'https://cdn-icons-png.flaticon.com/512/3049/3049365.png',
    rarity: 'epic',
    isCollected: true
  }
];

// Leaderboard
export const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    username: 'PixelMaster99',
    avatar: 'https://i.pravatar.cc/150?img=1',
    score: 986520
  },
  {
    rank: 2,
    username: 'RetroQueen',
    avatar: 'https://i.pravatar.cc/150?img=5',
    score: 932140
  },
  {
    rank: 3,
    username: 'GameLegend',
    avatar: 'https://i.pravatar.cc/150?img=3',
    score: 876350
  },
  {
    rank: 4,
    username: 'ArcadeKing',
    avatar: 'https://i.pravatar.cc/150?img=4',
    score: 821490
  },
  {
    rank: 5,
    username: 'Player1',
    avatar: 'https://i.pravatar.cc/150?img=7',
    score: 784260,
    isCurrentUser: true
  },
  {
    rank: 6,
    username: 'BitCrusher',
    avatar: 'https://i.pravatar.cc/150?img=6',
    score: 723840
  },
  {
    rank: 7,
    username: 'NeonGamer',
    avatar: 'https://i.pravatar.cc/150?img=9',
    score: 698520
  },
  {
    rank: 8,
    username: 'RetroHunter',
    avatar: 'https://i.pravatar.cc/150?img=10',
    score: 645780
  }
];
