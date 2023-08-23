import { userInterface } from "../entities/userInterface";
import { prismaClient } from "../prisma";
import { compareSync } from "bcrypt"
import  jwt  from "jsonwebtoken";

class findUserServices{
    async execute(props : userInterface){
        const findUser = await prismaClient.user.findUnique({
            where: {
                email: props.email
            }
        })

        const {senha, id} = findUser
        const match = compareSync(props.senha,senha)
        console.log(match)
        if (!match){
            return('senha incorreta')
        } 

        const token = jwt.sign({usuario:id}, process.env.SECRECRETE_KAY, {
            expiresIn: '24h'
        });

        return {findUser, token}

    }
}

export { findUserServices }