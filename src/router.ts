import {Router} from "express"
import { cadastroUsuarioController } from "./controller/cadastroUsuarioController"
import { findUserController } from "./controller/findUserContrller"
import { recuperacaoSenhaController } from "./controller/recuperacaoSenhaController"


const router = Router()

router.post('/login', new findUserController().handle)
router.post('/novo-usuario', new cadastroUsuarioController().handle)
router.post('/recuperacao-senha', new recuperacaoSenhaController().handle)

export {router}