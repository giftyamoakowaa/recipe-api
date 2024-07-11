import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipes.js";
import categoryRouter from "./routes/category.js";
import expressOasGenerator from "express-oas-generator";
import session from "express-session";
import userRouter from "./routes/user.js";
import MongoStore from "connect-mongo";
// Connect to database
await mongoose.connect(process.env.MONGO_URL);




// Create Express APP
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true, 
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),                                                                                                                                                                                                                                    
})

// Apply middleware
app.use(cors ());
app.use(express.json());
app.use(express.static('uploads'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: {secure: true},
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    })
    

}))



// use routes
app.use(userRouter);
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

app.patch('/sign', (req, res) => 
    { res.json('sign up');

});

// Listen for incoming request
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});