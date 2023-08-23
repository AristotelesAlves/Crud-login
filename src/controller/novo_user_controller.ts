import { Request, Response } from "express";
import { novo_usuario_service } from "../services/novo_usuario_services";

class novo_user_controller{
    async handle(req: Request, res: Response){
        const {nome,email,senha} = req.body;
        const service = new novo_usuario_service();
        const result = await service.excute({nome, email, senha});
        res.json(result);
    }
}

export { novo_user_controller }