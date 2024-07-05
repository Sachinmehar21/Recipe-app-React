import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";

const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes && recipes.find((r) => r.id == params.id);

    const [image, setimage] = useState(recipe.image);
    const [title, settitle] = useState(recipe.title);
    const [description, setdescription] = useState(recipe.description);
    const [ingredients, setingredients] = useState(recipe.ingredients);
    const [instructions, setinstructions] = useState(recipe.instructions);

    const UpdateHandler = (e) => {
        e.preventDefault();
        const updatedRecipe = {
            id: recipe.id,
            title,
            image,
            description,
            ingredients,
            instructions,
        };
        const copyRecipe = [...recipes];
        const recipeIndex = recipes.findIndex((r) => r.id == params.id);
        copyRecipe[recipeIndex] = updatedRecipe;

        localStorage.setItem("recipes", JSON.stringify(copyRecipe));
        dispatch(asyncgetrecipies());

        toast.success("Recipe Updated Successfully!");
        navigate("/recipes");
    };

    return recipe ? (
        <form onSubmit={UpdateHandler} className="max-w-screen-md mx-auto px-4">
            <h1 className="text-4xl sm:text-7xl mt-5 font-extrabold text-green-600 mb-8 text-center">
                Update Existing Recipe
            </h1>
            <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-4 py-3 text-lg mb-4"
                placeholder="Recipe Image URL"
            />
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-4 py-3 text-lg mb-4"
                placeholder="Recipe Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-4 py-3 text-lg mb-4"
                placeholder="Recipe Description"
                rows="5"
            ></textarea>
            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-4 py-3 text-lg mb-4"
                placeholder="Recipe Ingredients (separated by commas)"
                rows="5"
            ></textarea>
            <textarea
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-4 py-3 text-lg mb-4"
                placeholder="Recipe Instructions (separated by commas)"
                rows="5"
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-lg bg-green-600 text-white py-2 px-6 hover:bg-green-700 duration-200">
                    Update Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    ) : (
        <h1 className="w-full text-center text-4xl text-green-600 mt-10">
            Loading Recipe...
        </h1>
    );
};

export default Update;
