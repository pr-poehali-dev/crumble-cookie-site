import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LoyaltyProgram } from "@/components/LoyaltyProgram";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Delivery } from "@/components/Delivery";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";
import { Dessert } from "@/types";

const Index = () => {
  const [loyaltyPoints, setLoyaltyPoints] = useState(150);

  const handleAddToCart = (dessert: Dessert) => {
    console.log("Added to cart:", dessert.name);
    // Здесь можно добавить логику добавления в корзину
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-cyan-50">
      <Header loyaltyPoints={loyaltyPoints} />
      <Hero />
      <LoyaltyProgram loyaltyPoints={loyaltyPoints} />
      <Menu onAddToCart={handleAddToCart} />
      <About />
      <Delivery />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
