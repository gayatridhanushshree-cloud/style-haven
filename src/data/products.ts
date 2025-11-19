export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  reviews: Review[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

// Mock product data
export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
    rating: 5,
    category: "Men",
    description: "A timeless classic white shirt perfect for any occasion. Made from premium cotton with a comfortable fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black"],
    reviews: [
      {
        id: 1,
        author: "John D.",
        rating: 5,
        comment: "Perfect fit and great quality!",
        date: "2024-01-15"
      }
    ]
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800",
    rating: 4,
    category: "Women",
    description: "Beautiful floral print dress perfect for summer days. Lightweight and comfortable fabric.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral Blue", "Floral Pink", "Floral Yellow"],
    reviews: [
      {
        id: 2,
        author: "Sarah M.",
        rating: 4,
        comment: "Love the design, runs slightly large.",
        date: "2024-01-20"
      }
    ]
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    rating: 5,
    category: "Men",
    description: "Classic denim jacket with a modern fit. Perfect layering piece for any season.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    reviews: []
  },
  {
    id: 4,
    name: "Kids Graphic Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800",
    rating: 5,
    category: "Kids",
    description: "Fun and colorful graphic tee for kids. Soft cotton material.",
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["White", "Navy", "Red"],
    reviews: []
  },
  {
    id: 5,
    name: "Leather Handbag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    rating: 5,
    category: "Accessories",
    description: "Elegant leather handbag with multiple compartments. Perfect for everyday use.",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"],
    reviews: []
  },
  {
    id: 6,
    name: "Casual Sneakers",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
    rating: 4,
    category: "Accessories",
    description: "Comfortable casual sneakers for everyday wear. Lightweight and stylish.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Navy"],
    reviews: []
  },
  {
    id: 7,
    name: "Wool Blazer",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
    rating: 5,
    category: "Men",
    description: "Premium wool blazer for a sophisticated look. Tailored fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Charcoal", "Black"],
    reviews: []
  },
  {
    id: 8,
    name: "Silk Scarf",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601924357840-3e3e43a902d5?w=800",
    rating: 4,
    category: "Accessories",
    description: "Luxurious silk scarf with elegant patterns. Versatile accessory.",
    sizes: ["One Size"],
    colors: ["Blue", "Red", "Gold"],
    reviews: []
  }
];
