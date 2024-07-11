import { Router } from "express";
import { register, login, profile, logout } from "../controllers/user.js";
import { checkUserSession } from "../middleware/auth.js";



// create router
const userRouter = Router();


// Define Routes
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/logout', checkUserSession, logout);
userRouter.get('/profile', checkUserSession, profile);

// export router
export default userRouter;