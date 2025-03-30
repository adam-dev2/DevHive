import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'


dotenv.config();
const app = express();

connectDB();

app.use(cors(
    {
        origin: '*',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
));
app.use(express.json());


app.get('/',(req,res) => {
    res.status(200).json({message: 'API Is Running.........'});
})

app.use("/api/users",userRoutes);
app.use("/api/tasks",taskRoutes);





const PORT = process.env.PORT || 4000;
app.listen(PORT,(() => {
    console.log(`Server is Running on port: ${PORT}`);
}))