import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Filter products based on search query
  const filteredProducts = searchQuery.trim()
    ? products.filter((product) => {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      })
    : [];

  // Show dropdown when there are results
  useEffect(() => {
    setIsOpen(searchQuery.trim().length > 0 && filteredProducts.length > 0);
  }, [searchQuery, filteredProducts.length]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
      setIsMobileOpen(false);
      setSearchQuery("");
    }
  };

  const handleProductClick = () => {
    setIsOpen(false);
    setIsMobileOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      {/* Desktop Search */}
      <div ref={searchRef} className="hidden md:block relative">
        <form onSubmit={handleSearchSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-8 w-64 focus-visible:w-80 transition-all duration-300"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </form>

        {/* Search Suggestions Dropdown */}
        {isOpen && (
          <div className="absolute top-full mt-2 w-full min-w-[320px] bg-card border border-border rounded-lg shadow-elegant max-h-96 overflow-y-auto z-50">
            <div className="p-2">
              <div className="text-xs text-muted-foreground px-3 py-2">
                {filteredProducts.length} result{filteredProducts.length !== 1 ? "s" : ""} found
              </div>
              {filteredProducts.slice(0, 5).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={handleProductClick}
                  className="flex items-center gap-3 p-3 hover:bg-accent rounded-md transition-smooth"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  <p className="font-semibold text-sm">${product.price}</p>
                </Link>
              ))}
              {filteredProducts.length > 5 && (
                <button
                  onClick={() => {
                    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
                    handleProductClick();
                  }}
                  className="w-full text-center text-sm text-accent hover:text-accent/80 py-2 mt-1"
                >
                  View all {filteredProducts.length} results
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Search Icon */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Mobile Search Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 mb-4">
              <div ref={searchRef} className="flex-1 relative">
                <form onSubmit={handleSearchSubmit}>
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-8"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </form>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsMobileOpen(false);
                  setSearchQuery("");
                }}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Search Results */}
            {searchQuery.trim() && (
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground px-2">
                  {filteredProducts.length} result{filteredProducts.length !== 1 ? "s" : ""} found
                </div>
                {filteredProducts.length > 0 ? (
                  <>
                    {filteredProducts.slice(0, 8).map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={handleProductClick}
                        className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:bg-accent transition-smooth"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                        </div>
                        <p className="font-semibold">${product.price}</p>
                      </Link>
                    ))}
                    {filteredProducts.length > 8 && (
                      <button
                        onClick={() => {
                          navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
                          handleProductClick();
                        }}
                        className="w-full text-center text-accent hover:text-accent/80 py-3 border border-border rounded-lg"
                      >
                        View all {filteredProducts.length} results
                      </button>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No products found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
