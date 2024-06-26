import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";


// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes');
});

recipeRouter.post('/recipes', async (req, res) => {
    // Add recipe to database
    await RecipeModel.create(req.body);
    // Return response
    res.json('Recipe added');
});
recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`recipe with ID ${req.params.id} Deleted`);
});

recipeRouter.get('/recipes/:id', (req, res) => {
    res.json(`recipe with ID ${req.params.id} made`);
});



// export router
export default recipeRouter;