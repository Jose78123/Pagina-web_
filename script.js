import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      name: 'Librero ecológico "Classic model" color blanco',
      price: 1700,
      image: './assets/Eco_Classic.png'},
    {
      id: 2,
      name: 'Librero ecológico "Compact-Vertical" color madera',
      price: 1100,
      image: '../assets/Compact_Vertical.png' 
    },
    {
      id: 3,
      name: 'Librero ecológico "Multi-shelf" color azul cielo',
      price: 1400,
      image: '../assets/librero_multishef.png' 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= products.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, products.length - 3) : prevIndex - 3
    );
  };

  return (
    <div className="catalog">
      <h1>CATALOGO DE PRODUCTOS</h1>
      
      <div className="catalog-container">
        <button className="arrow" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>

        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <span>${product.price}</span>
              <button className="bt2">Comprar ahora</button>
            </div>
          ))}
        </div>

        <button className="arrow" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
