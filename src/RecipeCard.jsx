import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={recipe.image} alt={recipe.label} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{recipe.label}</div>
                <p className="text-gray-700 text-base">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </p>
            </div>
        </div>
    );
};


RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        image: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};
export default RecipeCard;