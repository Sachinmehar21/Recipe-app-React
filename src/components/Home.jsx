import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Home = () => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-center h-[60vh]">
            <div className="md:w-1/2 px-4 md:px-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-600">
                    SIMPLE AND TASTY RECIPES
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-zinc-400 mt-3 md:mt-5 mb-6 md:mb-10">
                Ditch the recipe hunt! This web app unlocks a world of delicious recipes. Build your cookbook, share your creations, and connect with foodies. Master your kitchen – start creating!
                </p>
                <Link to="/recipes">
                    <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-200 mb-4">
                        Get Started &nbsp; &#8594;
                    </button>
                </Link>
            </div>
            <div className="md:w-1/2 px-4 md:px-0">
                <img
                    className="w-full h-auto"
                    src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                    alt="Cooking Recipe"
                />
            </div>
        </div>
    );
};

export default Home;
