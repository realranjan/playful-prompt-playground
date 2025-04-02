
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedGame from '@/components/game/FeaturedGame';
import GameCard from '@/components/game/GameCard';
import CategoryCard from '@/components/game/CategoryCard';
import CollectibleBadge from '@/components/game/CollectibleBadge';
import LeaderboardCard from '@/components/game/LeaderboardCard';
import { gamesData, categoriesData, badgesData, leaderboardData } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Trophy, Flame, Star, ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredGame = gamesData.find(game => game.isFeatured);
  const trendingGames = gamesData.filter(game => game !== featuredGame).slice(0, 4);
  const topRatedGames = [...gamesData].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-8 pb-16">
          <div className="mb-10">
            {featuredGame && <FeaturedGame game={featuredGame} />}
          </div>
          
          {/* Categories */}
          <div className="my-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Game Categories</h2>
              <Button variant="link" className="text-white/70 hover:text-white">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {categoriesData.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
          
          {/* Trending Games */}
          <div className="my-16">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Flame className="mr-2 h-5 w-5 text-retro-orange" />
                <h2 className="text-2xl font-bold text-white">Trending Games</h2>
              </div>
              <Button variant="link" className="text-white/70 hover:text-white">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingGames.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
          
          {/* Collectibles Section */}
          <div className="my-16 bg-muted/50 rounded-xl p-6 md:p-8 neon-border">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Collect Rare Badges
                </h2>
                <p className="text-white/70 mb-6">
                  Complete challenges across different games to earn unique badges. Show off your 
                  achievements and unlock special rewards with legendary collections.
                </p>
                <Button className="bg-retro-green hover:bg-retro-green/90 text-white">
                  View Your Collection
                </Button>
              </div>
              <div className="md:col-span-3 flex justify-center md:justify-end">
                <div className="grid grid-cols-5 gap-2">
                  {badgesData.map(badge => (
                    <CollectibleBadge key={badge.id} badge={badge} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Top Rated & Leaderboard Combined Section */}
          <div className="my-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Star className="mr-2 h-5 w-5 text-retro-yellow" />
                <h2 className="text-2xl font-bold text-white">Top Rated Games</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {topRatedGames.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Trophy className="mr-2 h-5 w-5 text-retro-yellow" />
                <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 neon-border">
                <div className="space-y-2">
                  {leaderboardData.map(entry => (
                    <LeaderboardCard key={entry.rank} entry={entry} />
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4 text-white/70 hover:text-white">
                  See Full Leaderboard
                </Button>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="my-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-3 retro-text">
              Ready to Play?
            </h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Join thousands of players in our retro gaming community. Collect badges, compete 
              on leaderboards, and discover new pixel adventures every day!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-retro-pink hover:bg-retro-pink/90 text-white">
                Sign Up Now
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Browse All Games
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
