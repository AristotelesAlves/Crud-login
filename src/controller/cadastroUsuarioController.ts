import { Request, Response } from "express";
import { cadastroUsuarioServices } from "../services/cadastroUsuarioServices";

class cadastroUsuarioController{
    async handle(req: Request, res: Response){
        const {nome,email,senha} = req.body;
        const service = new cadastroUsuarioServices();
        const result = await service.excute({nome, email, senha});
        res.json(result);
    }
}

export { cadastroUsuarioController }