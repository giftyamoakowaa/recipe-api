import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipes.js";
import categoryRouter from "./routes/category.js";
import expressOasGenerator from "express-oas-generator";
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



// use routes
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