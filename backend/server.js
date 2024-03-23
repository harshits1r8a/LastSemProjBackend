import express from "express";
import 'dotenv/config'

const port = process.env.PORT || 5555
const app = express();

app.get('/', (req, res) => {
    res.send('App is running...')
})

app.get('/hellow', (req, res) => {
    res.send('Hellow World')
})

app.get('/:scrip', (req, res) => {
    const { scrip } = req.params;
    const price = Math.floor(Math.random() * (500 - 400 + 1)) + 400; // Generate random price between 400 and 500
    const data = { scrip, price };
    res.json(data);
});

app.listen(port, () => {
    console.log(`App listening in ${process.env.NODE_ENV} mode on port : ${port}`);
})