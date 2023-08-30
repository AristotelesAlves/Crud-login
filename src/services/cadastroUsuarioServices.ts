import { userInterface } from "../entities/userInterface";
import { prismaClient } from "../prisma";
import { hash } from "bcrypt";

class cadastroUsuarioServices {
    async execute(props: userInterface){
        const user = await prismaClient.user.findUnique({
            where: {
                email: props.email
            }
        })

        if(user){
            return('Usuário já cadastrado')
        }

        const hashpassword = await hash(props.senha, 10)

        const novoUser = await prismaClient.user.create({
            data:{
                nome: props.nome,
                email: props.email,
                senha: hashpassword,
            }
        })
        const mensagemUser = "Usuário cadastrado com sucesso!"
        return {novoUser, mensagemUser};
        // const mensagemUser = "Usuário cadastrado!";
        // const hashpassword = await hash(props.senha, 10)

        // if (!user){
        //     try {
        //         const user = await prismaClient.user.create({
        //             data:{
        //                 nome: props.nome,
        //                 email: props.email,
        //                 senha: hashpassword,

        //             }
        //         })
        //         const mensagemUser = "Usuário cadastrado com sucesso!"
        //         return {user, mensagemUser};
                

        //     } catch (error) {
        //         return error.mensagemUser;
        //     }
        // }
    }
}

export {cadastroUsuarioServices}