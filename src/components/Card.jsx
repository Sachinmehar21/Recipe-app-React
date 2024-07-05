import { Link } from "react-router-dom";

const Card = (props) => {
    const { id, title, image, description } = props.recipe;

    return (
        <Link
            to={`/recipes/${id}`}
            className="w-full md:w-[30%] mx-2 md:mx-0 mb-6 md:mb-0 text-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
        >
            <img className="w-full h-auto rounded-lg mb-4" src={image} alt={title} />
            <h1 className="text-xl font-semibold mb-2">{title}</h1>
            <p className="text-gray-600 text-sm mb-4">{description.slice(0, 100)}...</p>
            <div className="flex justify-around text-gray-500 text-sm">
                <div className="flex items-center">
                    <i className="ri-timer-line mr-1"></i>
                    <span>20 min</span>
                </div>
                <div className="flex items-center">
                    <i className="ri-thumb-up-line mr-1"></i>
                    <span>Easy</span>
                </div>
                <div className="flex items-center">
                    <i className="ri-share-line mr-1"></i>
                    <span>Share</span>
                </div>
            </div>
        </Link>
    );
};

export default Card;
