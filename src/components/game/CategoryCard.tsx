
import React from 'react';
import { Link } from 'react-router-dom';

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  color: string;
  gameCount: number;
}

interface CategoryCardProps {
  category: CategoryInfo;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="flex flex-col items-center justify-center p-4 bg-muted rounded-xl 
                hover:bg-muted/80 transition-colors group overflow-hidden neon-border"
    >
      <div 
        className={`w-12 h-12 flex items-center justify-center rounded-lg mb-3 animate-float
                    bg-${category.color}/20`}
      >
        <img src={category.icon} alt={category.name} className="w-8 h-8" />
      </div>
      <h3 className="font-medium text-white">{category.name}</h3>
      <p className="text-white/60 text-sm mt-1">{category.gameCount} Games</p>
    </Link>
  );
};

export default CategoryCard;
