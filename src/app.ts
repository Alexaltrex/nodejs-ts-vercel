import dotenv from 'dotenv';
import cors from 'cors';
import express, {Request, Response} from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.json("node-js + typescript + deploy to vercel")
});

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`));
        //console.log(process.env.NODE_ENV);
    } catch (e) {
        console.error('Server error', e);
        process.exit(1);
    }
};
start();
