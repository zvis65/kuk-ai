import express from 'express';
import corse from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/v1/health", (req, res) => {
    res.json({
        message: 'pjes'
    });
});

app.listen(PORT, () => {
    console.log('App is running!');
});