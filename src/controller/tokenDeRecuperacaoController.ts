import { Request, Response } from "express";
import { tokenDeRecuperacaoService } from "../services/tokenDeRecuperacaoService";

class tokenDeRecuperacaoController{
    async handle(req : Request, res : Response){
        const {email} = req.body;
        const service = new tokenDeRecuperacaoService();
        const result = await service.execute(email);
        res.json(result);

    }
}

export {tokenDeRecuperacaoController}