import {Router} from "express"
import { novo_user_controller } from "./controller/novo_user_controller"
import { findUserController } from "./controller/findUserContrller"


const router = Router()

router.post('/login', new findUserController().handle)
router.post('/novo-usuario', new novo_user_controller().handle)

export {router}