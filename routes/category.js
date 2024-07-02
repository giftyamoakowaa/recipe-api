import { Router } from "express";
import { getCategories, postCategories } from "../controllers/category.js";
import { localUploads } from "../middleware/uploads.js";

// create upload middleware

// const upload = multer({dest: 'uploads'});

const categoryRouter = Router();

categoryRouter.get('/categories', getCategories)

categoryRouter.post('/categories', localUploads.single('image'),postCategories);

export default categoryRouter;