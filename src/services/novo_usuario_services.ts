import { userInterface } from "../entities/userInterface";
import { prismaClient } from "../prisma";
import { hash } from "bcrypt";

class novo_usuario_service {
    async excute(props: userInterface){
        let user = await prismaClient.user.findUnique({
            where: {
                email: props.email
            }
        })

        let mensagemUser = "Usuário cadastrado!";
        const hashpassword = await hash(props.senha, 10)

        if (!user){
            try {
                const user = await prismaClient.user.create({
                    data:{
                        nome: props.nome,
                        email: props.email,
                        senha: hashpassword
                    }
                })
                const mensagemUser = "Usuário cadastrado com sucesso!"
                return {user, mensagemUser};
                

            } catch (error) {
                return error.mensagemUser;
            }
        }

        return {user,mensagemUser}
    }
}

export {novo_usuario_service}