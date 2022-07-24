import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

export const ListOfRecipes = ([]) => {
    const [recipe, setRecipe] = useState([]);
    const getListofRecipes = () => {
        let { recipe, error } = await supabase
            .from('recipes')
            .select('name');
            then((recipe) => setRecipe(recipe.items[0]))
        console.log(recipe);
    }
    
    useEffect(() => {
        //fetch("/api/data").then(
        //    res => setState(res.data)
        //)
        getListofRecipes();

    }, []);

    return (
        <section id="diner">
            {recipe.map(recipe => {
                <div class="card">
                <img src="link do zdjêcia" class="card-img-top" alt="nazwa przepisu" />
                <div class="card-body">
                        <h5 class="card-title">{recipe}</h5>
                    <a href="#!" class="btn btn-primary">Wypróbuj!</a>
                </div>
            </div>
            })}
        </section>
    )
}
