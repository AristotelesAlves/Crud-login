import { Request, Response } from "express";
import { recuperacaoSenhaServices } from "../services/recuperacaoSenhaServices";

class recuperacaoSenhaController {
    async handle(req: Request,res : Response){
        const {code,email,senhaNova} = req.body;
        const service = new recuperacaoSenhaServices();
        const result = await service.execute({code,email,senhaNova});
        res.json(result)
    }
}

export {recuperacaoSenhaController}