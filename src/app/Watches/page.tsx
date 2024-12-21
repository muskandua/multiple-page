import React from "react";
import Image from "next/image";

const page = () => {
  const products = [
    {
      id: 1,
      name: "Rolex",
      price: 199.99,
      description: "Luxury watch",
      image: "/product1.jpg",
    },
    {
      id: 2,
      name: "Omega",
      price: 299.99,
      description: "Sporty design",
      image: "/product2.jpg",
    },
    {
      id: 3,
      name: "Patek Philippe",
      price: 399.99,
      description: "Elegant timepiece",
      image: "/product3.jpg",
    },
    {
      id: 4,
      name: "TAG Heuer",
      price: 499.99,
      description: "Sporty and stylish",
      image: "/product4.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: 599.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product2.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: 699.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product4.jpg",
    },
    {
      id: 7,
      name: "Product 7",
      price: 799.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product1.jpg",
    },
    {
      id: 8,
      name: "Product 8",
      price: 899.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product3.jpg",
    },
    {
      id: 9,
      name: "Product 9",
      price: 999.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product4.jpg",
    },
    {
      id: 10,
      name: "Product 10",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product3.jpg",
    },
    {
      id: 11,
      name: "Product 11",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product1.jpg",
    },
    {
      id: 12,
      name: "Product 12",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product4.jpg",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 lg:h-64 object-cover"
            />
            <div>
              <h2 className="text-sm tracking-widest text-gray-700 uppercase font-semibold">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md transition-transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
