import {Router} from "express"
import { cadastroUsuarioController } from "./controller/cadastroUsuarioController"
import { findUserController } from "./controller/findUserContrller"
import { recuperacaoSenhaController } from "./controller/recuperacaoSenhaController"
import { tokenDeRecuperacaoController } from "./controller/tokenDeRecuperacaoController"



const router = Router()

router.post('/login', new findUserController().handle)
router.post('/novo-usuario', new cadastroUsuarioController().handle)
router.post('/recuperacao-senha', new recuperacaoSenhaController().handle)
router.post('/test', new tokenDeRecuperacaoController().handle)

export {router}