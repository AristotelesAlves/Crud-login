import {Router} from "express"
import { cadastroUsuarioController } from "./controller/cadastroUsuarioController"
import { findUserController } from "./controller/findUserContrller"


const router = Router()

router.post('/login', new findUserController().handle)
router.post('/novo-usuario', new cadastroUsuarioController().handle)

export {router}