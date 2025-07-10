import { RecipeCard } from "../components/RecipeCard";

const savedRecipes = [
    {
      title: 'Raw chicken',
      ingredients: ['Rice', 'Chicken'],
      instructions: ['Just do it'],
      totalTime: 20
    },
    {
      title: 'Piscanec na secuanski nacin',
      ingredients: ['Rice', 'Chicken'],
      instructions: ['Just do it'],
      totalTime: 20
    },
    {
      title: 'Piscanec po mongolsko',
      ingredients: ['Rice', 'chicken', 'bamboo', 'garlic'],
      instructions: ['Just do it'],
      totalTime: 20
    },
];

function Saved() {
    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-5xl mx-auto px-6 py-4">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                        My saved recipes
                    </h1>
                </div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {savedRecipes.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Saved;