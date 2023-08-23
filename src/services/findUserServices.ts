import { prismaClient } from "../prisma";
import { compare } from "bcrypt"

class findUserServices{
    async execute(){
        const findUser = await prismaClient.user.findUnique({
            where: {
                email
            }
        })

        const {senha} = findUser

        const match = senha == compare("d")

        if(!findUser){
            try {
                
            } catch (error) {
                return error
            }
        }
    }
}