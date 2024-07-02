import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";
import { localUploads } from "../middleware/uploads.js";


// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes',  localUploads.single('image'), postRecipe);
recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);



// export router
export default recipeRouter;