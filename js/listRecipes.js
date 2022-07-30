import { useState, useEfect } from 'react';
import ReactDOM from "react-dom";
import { supabase } from './supabase';

export const ListRecipes = () => {
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
            .insert([{ name, content }])
            .sinle()
        setRecipes({ name: '', content: '' })
        fetchPosts()
    }
    return (
        <div class='recipes-container'>
            <input pleacerholder="Name" value={name} onChange={e => setPost({ ...recipe, name: e.target.value })} />
            <button onClick={createRecipe}> Open recipe</button>
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
export default ListRecipes;
//ReactDOM.render(<ListRecipes/>, document.getElementById("diner"));
