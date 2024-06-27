import { RecipeModel } from "../models/recipe.js";


// Get All Recipe
export const getRecipes = async (req, res) => {
    try {
      // Get all recipes from database
      const allRecipes = await RecipeModel.find();
      // Return all recipes as response
      res.json(allRecipes);
    } catch (error) {
     
    }
 }

//  Post Recipe
export const postRecipe = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        // Return response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
}

// Patch Recipe
export const patchRecipe = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} updated`);
}

// Delete Recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        // Delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.param.id);
        // Return response
        res.json(deletedRecipe);
    } catch (error) {
        next(error);
        
    }
}

// Get Recipe
export const getRecipe =(req, res) => {
    res.json(`recipe with ID ${req.params.id} made`);
}