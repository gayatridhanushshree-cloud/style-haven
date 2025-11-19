import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWishlist } from "@/hooks/useWishlist";
import { products } from "@/data/products";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

const ProductCard = ({ id, name, price, image, rating, category }: ProductCardProps) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const product = products.find((p) => p.id === id);
  const inWishlist = isInWishlist(id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product) {
      toggleWishlist(product);
      toast.success(inWishlist ? "Removed from wishlist" : "Added to wishlist");
    }
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-elegant transition-smooth">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 hover:bg-background"
            onClick={handleWishlistClick}
          >
            <Heart className={`h-4 w-4 ${inWishlist ? "fill-accent text-accent" : ""}`} />
          </Button>
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
        </div>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-foreground mb-2 hover:text-accent transition-smooth line-clamp-1">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < rating ? "fill-accent text-accent" : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating}.0)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">${price}</span>
          <Button size="sm" className="bg-accent hover:bg-accent/90">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
