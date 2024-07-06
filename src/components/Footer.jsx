import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold text-green-600 mb-6">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center bg-green-600 text-white text-2xl h-16">
                            <i className="ri-restaurant-line"></i>
                        </div>
                        <div className="p-3">
                            <h1 className="text-lg font-bold mb-1">Quality Food</h1>
                            <p className="text-sm text-gray-600">
                            Ditch takeout! Discover high-quality recipes in our app. Simple steps, fresh flavors, delicious food - all at your fingertips.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center bg-green-600 text-white text-2xl h-16">
                            <i className="ri-graduation-cap-line"></i>
                        </div>
                        <div className="p-3">
                            <h1 className="text-lg font-bold mb-1">Cook like a Chef</h1>
                            <p className="text-sm text-gray-600">
                            Sizzle with confidence! Sear, season, taste as you go. Fresh, high-quality ingredients + technique = restaurant-worthy meals.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center bg-green-600 text-white text-2xl h-16">
                            <i className="ri-bread-line"></i>
                        </div>
                        <div className="p-3">
                            <h1 className="text-lg font-bold mb-1">Ingredients</h1>
                            <p className="text-sm text-gray-600">
                            Transform your pantry! Explore surprising combos, elevate leftovers, unlock chef-worthy dishes with everyday ingredients.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="flex items-center justify-center bg-green-600 text-white text-2xl h-16">
                            <i className="ri-presentation-line"></i>
                        </div>
                        <div className="p-3">
                            <h1 className="text-lg font-bold mb-1">Easy Recipe</h1>
                            <p className="text-sm text-gray-600">
                            Whip up magic in minutes! Explore our app for fuss-free recipes using ingredients you already have. Dinner solved, delicious guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
