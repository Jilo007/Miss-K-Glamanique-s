
import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  category,
}) => {
  // Ensure images are properly referenced whether they're from public or external URLs
  const imageUrl = image.startsWith("http") 
    ? image 
    : image.startsWith("/public") 
      ? image.replace("/public", "") 
      : image;

  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4 bg-gray-100 rounded-2xl hover-lift">
        <div 
          className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 rounded-2xl"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 rounded-2xl"></div>
        </div>
      </div>
      
      <div className="space-y-1">
        {category && (
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            {category}
          </p>
        )}
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-700">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
