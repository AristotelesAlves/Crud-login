import { compareSync, hash,  } from "bcrypt";
import { prismaClient } from "../prisma";

interface IRecuperacaoSenha {
    email: string;
    senhaNova: string;
    code: string;
}

class recuperacaoSenhaServices{
    async execute(props: IRecuperacaoSenha){
        try {
            const user = await prismaClient.user.findUnique({
                where: {
                    email: props.email
                }
            })

            if(!user){
                return 'Usuário não encontrado'
            }
            
            const code = await prismaClient.recoveryCode.findUnique({
                where:{
                    id: user.code_id,
                }
            })

            if(!code){
                return 'Código não encontrado'
            }  
            
            const comparacao = compareSync(props.code,code.code)

            if(!comparacao){
                return 'Código invalido'
            }

            const time = code.data.getMinutes() - new Date().getMinutes()

            if (Math.abs(time) > 5){
                return 'Código expirou'
            }

            const senhaNova = await hash(props.senhaNova, 10)

            const update = await prismaClient.user.update({
                where:{
                    id: user.id,
                },
                data:{
                    senha: senhaNova
                }
            })

            return(update)

        } catch (error) {
            console.error('Erro ao buscar usuário')
        }

    }
}

export {recuperacaoSenhaServices}