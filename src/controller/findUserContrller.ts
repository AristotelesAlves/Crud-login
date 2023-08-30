import { Request, Response } from "express";
import { findUserServices } from "../services/findUserServices";

class findUserController{
    async handle(req: Request, res: Response){
        const {senha, email} = req.body;
        const service = new findUserServices();
        const result = await service.execute({email, senha})
        res.json(result);
    }
}

export { findUserController }