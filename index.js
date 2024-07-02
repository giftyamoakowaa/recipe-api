import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipes.js";
import categoryRouter from "./routes/category.js";
// Connect to database
await mongoose.connect(process.env.MONGO_URL);


// Create Express APP
const app = express();

// Apply middleware
app.use(express.json());
app.use(express.static('uploads'));



// use routes
app.use(recipeRouter);
app.use(categoryRouter);

app.patch('/sign', (req, res) => 
    { res.json('sign up');

});

// Listen for incoming request
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});