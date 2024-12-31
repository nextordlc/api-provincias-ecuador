import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from "dotenv";
import { router } from './routes/index.routes';
import { db } from './config/database';

config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors({
    methods:['OPTIONS','GET']
}));
app.use(morgan('dev'));
db.supabase;
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});