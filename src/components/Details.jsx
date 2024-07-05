import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";

const Details = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes.find((r) => r.id == params.id);

    const DeleteHandler = () => {
        localStorage.setItem(
            "recipes",
            JSON.stringify(recipes.filter((r) => r.id != params.id))
        );
        dispatch(asyncgetrecipies());
        toast.success("Recipe Deleted Successfully!");
        navigate("/recipes");
    };

    return recipe ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link to="/recipes" className="text-3xl ri-arrow-left-line block mb-4"></Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <img className="w-full h-auto object-cover mb-6" src={recipe.image} alt={recipe.title} />
                    <h1 className="text-3xl font-bold text-green-600 mb-4">{recipe.title}</h1>
                    <p className="text-gray-600 mb-4">{recipe.description}</p>
                    <div className="flex justify-between">
                        <Link
                            to={`/update-recipe/${params.id}`}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
                        >
                            Update
                        </Link>
                        <button
                            onClick={DeleteHandler}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-200"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 overflow-auto">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">Ingredients</h2>
                        <ul className="text-gray-600 list-disc pl-4">
                            {recipe.ingredients.split(",").map((d, i) => (
                                <li className="text-lg mb-2" key={i}>{d.trim()}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-green-600 mb-4">Instructions</h2>
                        <ol className="text-gray-600 list-decimal pl-6">
                            {recipe.instructions.split(".").map((d, i) => (
                                <li className="text-lg mb-4" key={i}>{d.trim()}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <h1 className="w-full text-center text-4xl text-green-600 mt-10">
            Loading Recipe...
        </h1>
    );
};

export default Details;
