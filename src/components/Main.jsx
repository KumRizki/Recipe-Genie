import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {
    
    const [ingredients, setIngredients] = React.useState([])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient") 
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    const [recipeShown, setRecipeShown] = React.useState(false)
    
    function toggleRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }

    return (
        <main>
            
            <section className="welcome-container">
                <h1 className="welcome-title">Welcome to Recipe Genie!</h1>
                <p className="welcome-description">This website will take all your available recipes and turn it all into easy to follow recipes!</p>
            </section>
            
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && <IngredientsList 
                ingredientsListItems={ingredientsListItems} 
                toggleRecipeShown={toggleRecipeShown}
            />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}