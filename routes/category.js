import { Router } from "express";
import { getCategories, postCategories } from "../controllers/category.js";
import { localUploads, remoteUploads } from "../middleware/uploads.js";
import { checkUserSession } from "../middleware/auth.js";

// create upload middleware

// const upload = multer({dest: 'uploads'});

const categoryRouter = Router();

categoryRouter.get('/categories', getCategories)

categoryRouter.post('/categories', checkUserSession,remoteUploads.single('image'),postCategories);

export default categoryRouter;