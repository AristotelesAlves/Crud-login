import { createTransport } from "nodemailer";
import { prismaClient } from "../prisma";
import { hash } from "bcrypt";

class tokenDeRecuperacaoService {
  async execute(email: string){
    try {
      const user = await prismaClient.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return "Usuário não encontrado!";
      }

      const code = (Math.random() + 1).toString(36).substring(7);
      const cryptCode = await hash(code, 10)
      
      const recoveryTabe = await prismaClient.recoveryCode.findUnique({
        where: {
            email: email
        }
      })

      if(!recoveryTabe){
        const newCodeRecovery = await prismaClient.recoveryCode.create({
            data:{
                code:cryptCode,
                email:email,
                user_id: user.id,
            }
        })

        return newCodeRecovery
      }
    
      const newCodeRecovery = await prismaClient.recoveryCode.update({
        where:{id: recoveryTabe.id},
        data:{code:cryptCode}
      })


     const envio = createTransport({
         host: 'smtp.gmail.com',
         port: 465,
         secure: true,
         auth:{
             user:'arystotelys@gmail.com',
             pass:process.env.KEY_SECRET_EMAIL,
         }
     })

     envio.sendMail({
         from:'Aristoteles <arystotelys@gmail.com>',
         to:'aristotelesaleves39@gmail.com',
         subject:'enviando email',
         html:`${code}`
     })

     return {newCodeRecovery, code}

    } catch (error) {
      console.error(error);
      return "Ocorreu um erro ao gerar o token";
    }
  }
}

export { tokenDeRecuperacaoService };