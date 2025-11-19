import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Star, Heart, ShoppingCart, Truck, RotateCcw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color");
      return;
    }
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden shadow-elegant">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-muted-foreground uppercase tracking-wide">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-display font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating ? "fill-accent text-accent" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews.length} reviews)
              </span>
            </div>
            
            <div className="text-3xl font-bold text-foreground mb-6">
              ${product.price}
            </div>
            
            <p className="text-muted-foreground mb-8">
              {product.description}
            </p>
            
            <Separator className="mb-6" />
            
            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Select Size</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={selectedSize === size ? "bg-accent hover:bg-accent/90" : ""}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Select Color</h3>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    className={selectedColor === color ? "bg-accent hover:bg-accent/90" : ""}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Button
                size="lg"
                className="flex-1 bg-accent hover:bg-accent/90"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Additional Info */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        {product.reviews.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-display font-bold mb-8">Customer Reviews</h2>
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-accent text-accent" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{review.author}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
