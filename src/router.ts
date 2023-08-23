import {Router} from "express"
import { novo_user_controller } from "./controller/novo_user_controller"
import { user_controller } from "./controller/user_controller"

const router = Router()

router.get('/users', new user_controller().handle)
router.post('/novo-usuario', new novo_user_controller().handle)

export {router}