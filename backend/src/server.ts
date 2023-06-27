import express from 'express';
import cors from 'cors';
import { sample_cards } from './data';

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/cards", (req,res) =>{
    res.send(sample_cards);
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})