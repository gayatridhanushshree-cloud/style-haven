import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useWishlist } from "@/hooks/useWishlist";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { wishlist } = useWishlist();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-foreground">StyleHub</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products?category=men" className="text-sm font-medium text-foreground hover:text-accent transition-smooth">
              Men
            </Link>
            <Link to="/products?category=women" className="text-sm font-medium text-foreground hover:text-accent transition-smooth">
              Women
            </Link>
            <Link to="/products?category=kids" className="text-sm font-medium text-foreground hover:text-accent transition-smooth">
              Kids
            </Link>
            <Link to="/products?category=accessories" className="text-sm font-medium text-foreground hover:text-accent transition-smooth">
              Accessories
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-accent transition-smooth">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-smooth">
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/products?category=men"
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                to="/products?category=women"
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/products?category=kids"
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Kids
              </Link>
              <Link
                to="/products?category=accessories"
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
