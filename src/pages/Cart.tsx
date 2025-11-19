import { Link } from "react-router-dom";
import { Trash2, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  // Mock empty cart - in real app would use state management
  const cartItems: any[] = [];

  const subtotal = 0;
  const shipping = 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-4xl font-display font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Start Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-display font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg p-6 shadow-elegant">
                <div className="flex gap-6">
                  <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Size: {item.size} | Color: {item.color}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="icon">-</Button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon">+</Button>
                      </div>
                      <span className="text-lg font-semibold">${item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 shadow-elegant sticky top-24">
              <h2 className="text-2xl font-display font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                Proceed to Checkout
              </Button>
              
              <Link to="/products">
                <Button variant="ghost" className="w-full mt-3">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
