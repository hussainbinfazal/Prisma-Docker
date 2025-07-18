import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});
app.use('/api/users', userRoutes);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
