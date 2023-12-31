
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const FeaturedSection = () => {
  const featuredToys = [
    {
      id: 1,
      name: 'Super ButterFly',
      image: 'https://i.ibb.co/fdHm8Bp/71-VQii2-LJHL-SL1500.jpg',
      description: 'This awesome butterfly toy can transform into a car and a spaceship. Perfect for imaginative play!',
      price: 29.99,
    },
    {
      id: 2,
      name: 'Adventure Embarkt',
      image: 'https://i.ibb.co/VDzzyDS/images-1.jpg',
      description: 'Embark on thrilling adventures with this playset that includes action figures, vehicles, and more.',
      price: 49.99,
    },
    {
      id: 3,
      name: 'Creative Octopus',
      image: 'https://i.ibb.co/x7BSXK4/0001196450398.webp',
      description: 'Let your child\'s creativity soar with these colorful Octopus. Endless possibilities await!',
      price: 19.99,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800 });

    return () => {
      AOS.refresh();
    };
  }, []);

  const handleAddToCart = (toy) => {

    console.log(`Added "${toy.name}" to cart.`);
  };

  return (
 <div className='my-10'>
     <div className="container mx-auto px-4 ">
      <h2 className="text-2xl md:text-3xl font-bold md:mb-6 mb-2 text-primary text-center">Featured Toys</h2>
      <p className="text-center text-indigo-100 md:mb-8 mb-4 font-semibold md:font-bold text-sm  md:text-base">
        These toys are coming soon. Make sure you add them to your cart!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredToys.map((toy) => (
          <div
            key={toy.id}
            className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
            data-aos="fade-up"
          >
            <div className="relative">
              <img className="w-40 h-40 mx-auto mb-4 rounded-full" src={toy.image} alt={toy.name} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAddToCart(toy)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{toy.name}</h3>
            <p className="text-gray-600 text-sm">{toy.description}</p>
            <p className="text-gray-700 font-bold mt-2">${toy.price}</p>
          </div>
        ))}
      </div>
    </div>
 </div>
  );
};

export default FeaturedSection;
