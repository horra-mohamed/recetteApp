import { useState } from 'react';
import RecipeCard from './RecipeCard';

const APP_ID = 'e9595357';
const APP_KEY = 'b3a598d6972b38e9d0264e6970bde9bb';
const USER_ID = 'shadosx';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');

    const fetchRecipes = async () => {
        try {
            const response = await fetch(
                `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`,
                {
                    method: 'GET',
                    headers: {
                        'Edamam-Account-User': USER_ID,
                    },
                }
            );
            const data = await response.json();
            if (data.count === 0) {
                setError('No recipes found for the given search.');
                setRecipes([]);
            } else {
                setRecipes(data.hits.map((hit) => hit.recipe));
                setError('');
            }
        } catch {
            setError('An error occurred while fetching recipes.');
            setRecipes([]);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchRecipes();
    };
    return (<>
            <h1 className="text-4xl font-bold mb-4">Hello</h1>
            <h2 className="text-3xl font-semibold mb-3">Hello</h2>
            <h3 className="text-2xl mb-2">Hello</h3>
            <h4 className="text-xl mb-1">Hello</h4>
            <div className="App">
            </div>

        <div className="App">
            <form onSubmit={handleSearch} className="m-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Rechercher une recette..."
                    className="border-2 border-gray-300 rounded p-2 mr-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Rechercher
                </button>
                {error && (
                    <div className="flex justify-center p-4">
                        <div className="bg-red-200 border border-red-500 text-red-700 px-4 py-3 rounded-lg" role="alert">
                            <strong className="font-bold">Oops! </strong>
                            <span>{error}</span>
                        </div>
                    </div>
                )}
            </form>
            <div className="grid grid-cols-3 gap-4">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    </>
    );
};
export default App;