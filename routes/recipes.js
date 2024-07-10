import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";
import { localUploads, remoteUploads } from "../middleware/uploads.js";
import { checkUserSession } from "../middleware/auth.js";


// Create router
const recipeRouter = Router();

// Apply middlewares
recipeRouter.use(checkUserSession);

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', checkUserSession, remoteUploads.single('image'), postRecipe);

recipeRouter.patch('/recipes/:id', checkUserSession, patchRecipe);

recipeRouter.delete('/recipes/:id',checkUserSession, deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);



// export router
export default recipeRouter;