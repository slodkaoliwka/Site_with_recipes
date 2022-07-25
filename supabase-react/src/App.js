import './App.css';
import { useState, useEfect } from 'react';
import {supabase } from './supabaseClient'

function App() {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState({ name: '', photo: '' });
    const { name, content } = recipe;
    useEfect(() => {
        fetchRecipes()
    }, []);
    async function fetchRecipes() {
        const { data } = await supabase
            .from('recipes')
            .select()
        setRecipe(data)
        console.log("data:", data)
    }
    async function createRecipe() {
        await supabase
            .from('posts')
        .insert([{ name, photo }])
            .sinle()
        setRecipe({ name: '', photo: ''})
        fetchPosts()
    }
    return (
        <div>
            <input pleacerholder="Name"
                value={name}
                onChange={e => setPost({ ...recipe, name: e.target.value })} />
            <button onClick={createRecipe}> Creat recipe</button>
            <div className="list">
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.name}</h3>
                        <p>{recipe.photo}</p>
                    </div>)

                )}
            </div>
        </div>
)
}
export default App;
