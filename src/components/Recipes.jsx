import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Recipes = () => {
    const { recipes } = useSelector((state) => state.recipeReducer);
    const { pathname } = useLocation();

    return (
        <div className="px-4 md:px-8 lg:px-16">
            <h1 className="text-green-600 text-5xl font-extrabold text-center mt-10" style={{ textDecoration: 'underline' }}>
    OUR RECIPES
</h1>

            <p className="text-center text-zinc-400 mt-2 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                aperiam?
            </p>
            <div className="recipe-cards flex flex-wrap justify-center">
                {recipes.length > 0 ? (
                    recipes.map((r) => <Card key={r.id} recipe={r} />)
                ) : (
                    <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10 pb-5">
                    No Recipe Found
                </h1>
                
                )}
            </div>
            {pathname === "/recipes" && (
                <Link
                    to="/create-recipe"
                    className="fixed bottom-8 right-8 md:relative md:bottom-auto md:right-auto md:mt-8 py-2 px-5 bg-green-200 text-green-600 rounded-md flex items-center gap-3 hover:bg-green-300 duration-200"
                    style={{ maxWidth: "fit-content", marginBottom: "2rem" }}
                >
                    <i className="text-3xl ri-add-box-line"></i>
                    <span className="hidden md:inline-block">Create Recipe</span>
                </Link>
            )}
        </div>
    );
};

export default Recipes;
