import  Express  from "express";
import cors from "cors";
import { router } from "./router";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(router);
app.listen((4444), () => console.log("Servidor rodando na porta meu camarada!"))
