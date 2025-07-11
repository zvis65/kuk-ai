import express from 'express';
import cors from 'cors';
import { login, register } from './views/auth.js';
import { jwtMiddleware } from './util.js';
import { saveRecipe, getMyRecipes } from './views/recipes.js';
import { generateRecipe, refineRecipe } from './views/ai.js';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/api/v1/health", (req, res) => {
    res.json({
        message: 'test123'
    });
});

app.post("/api/v1/auth/register", register);
app.post("/api/v1/auth/login", login);

app.post("/api/v1/recipes", jwtMiddleware, saveRecipe);
app.get("/api/v1/recipes", jwtMiddleware, getMyRecipes);

app.post("/api/v1/ai/generate-recipe", generateRecipe);
app.post("/api/v1/ai/refine-recipe", refineRecipe);

app.listen(PORT, () => {
    console.log('App is running!');
});