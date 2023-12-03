import { FaHeart } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-gray-800 px-4 py-40">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        About Us
      </h1>
      <p className="text-lg md:text-xl text-center mb-4">
        Welcome to Food Villa, where we serve passion on a plate!
      </p>
      <div className="max-w-2xl text-center mb-6">
        <p>
          At Food Villa, we believe in creating unforgettable dining experiences
          rooted in the rich flavors and traditions of world cuisine. Our team
          of dedicated chefs uses only the freshest ingredients to craft dishes
          that delight the senses.
        </p>
        <p className="mt-4">
          Whether you’re here for a casual meal or a special celebration, our
          goal is to make every visit a memorable one. Join us on this culinary
          journey and explore the tastes and aromas of our diverse menu.
        </p>
      </div>
      <div className="text-red-600 text-3xl md:text-4xl">
        <FaHeart />
      </div>
      <div className="mt-6">
        <a href="/" className="text-blue-500 hover:text-blue-700 text-lg">
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default About;
