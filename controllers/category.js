import { categoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try {
        // get query params
        const { limit =10, skip =0, filter ="{}", fields ="{}" } = req.query;
        // Get all categories from database
        const allCategories = await categoryModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        // Return respomse
        res.json(allCategories);
    } catch (error) {
        next(error)
    }
}

export const postCategories = async (req, res, next) => {
    try {
        // Get all categories from database
        const newCategories = await categoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return respomse
        res.json(newCategories);
    } catch (error) {
        next(error)
    }
}
