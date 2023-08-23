import { userInterface } from "../entities/userInterface";
import { prismaClient } from "../prisma";
import { compareSync } from "bcrypt"

class findUserServices{
    async execute(props : userInterface){
        const findUser = await prismaClient.user.findUnique({
            where: {
                email: props.email
            }
        })

        const {senha} = findUser
        const match = compareSync(props.senha,senha)
        console.log(match)
        if (!match){
            return('senha incorreta')
        } 

        return findUser
        
    }
}

export { findUserServices }