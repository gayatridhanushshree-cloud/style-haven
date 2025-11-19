import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">StyleHub</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Discover your perfect style with our curated fashion collections.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=men" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/products?category=women" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/products?category=kids" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Kids' Collection
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-smooth">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1"
              />
              <Button size="icon" className="bg-accent hover:bg-accent/90">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 StyleHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
