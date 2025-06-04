import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import messageRoutes from "./routes/message.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", messageRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);

export default app;
