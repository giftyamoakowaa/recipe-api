import { categoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try{
    // Get all categories from database
    const allCategories = await categoryModel.find();
    // Return respomse
    res.json(allCategories);
    } catch (error) {
        next(error)
    }
}

export const postCategories = async (req, res, next) => {
    try{
    // Get all categories from database
    const newCategories = await categoryModel.create({
        ...req.body,
        image:req.file.filename
    });
    // Return respomse
    res.json(newCategories);
    } catch (error) {
        next(error)
    }
}
