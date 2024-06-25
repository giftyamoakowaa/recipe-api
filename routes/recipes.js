import { Router } from "express";


// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes');
});

recipeRouter.post('/recipes', (req, res) => {
    res.json('Recipe Added');
});
recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`recipe with ID ${req.params.id} Deleted`);
});

// export router
export default recipeRouter;