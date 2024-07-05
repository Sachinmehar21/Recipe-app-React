import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { recipes } = useSelector((state) => state.recipeReducer);

    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [ingredients, setingredients] = useState("");
    const [instructions, setinstructions] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        // Basic validation to check if required fields are empty
        if (!image || !title || !description || !ingredients || !instructions) {
            toast.error("Please fill in all fields.");
            return;
        }

        const newRecipe = {
            id: nanoid(),
            image,
            title,
            description,
            ingredients,
            instructions,
        };

        localStorage.setItem(
            "recipes",
            JSON.stringify([...recipes, newRecipe])
        );
        dispatch(asyncgetrecipies());
        toast.success("Recipe Created Successfully!");
        navigate("/recipes");
    };

    return (
        <form onSubmit={SubmitHandler} className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 text-center mb-6">
                Create New Recipe
            </h1>
            <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-4 py-2 text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Recipe Image URL"
            />
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-4 py-2 text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Recipe Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-4 py-2 text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Recipe Description..."
                rows="4"
            ></textarea>
            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-4 py-2 text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Recipe Ingredients (Separate with commas)..."
                rows="4"
            ></textarea>
            <textarea
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-4 py-2 text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Recipe Instructions (Separate with commas)..."
                rows="4"
            ></textarea>
            <div className="flex justify-end">
                <button className="rounded-md text-lg bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;
