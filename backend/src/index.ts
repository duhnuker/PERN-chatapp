import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import authRoutes from "../src/routes/auth.route";
import messageRoutes from "./routes/message.route";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(3000, () => {
    console.log("Server started on localhost:3000");
});

