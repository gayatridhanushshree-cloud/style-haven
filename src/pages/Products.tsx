import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");
  
  const [searchQuery, setSearchQuery] = useState(searchParam || "");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [sortBy, setSortBy] = useState("newest");
  
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [categoryParam, searchParam]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-display font-bold mb-8">
          {selectedCategory === "all" ? "All Products" : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
        </h1>
        
        {/* Filters and Search */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-elegant">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="men">Men</SelectItem>
                <SelectItem value="women">Women</SelectItem>
                <SelectItem value="kids">Kids</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
            
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="mb-6 text-muted-foreground">
          Showing {sortedProducts.length} products
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No products found</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
