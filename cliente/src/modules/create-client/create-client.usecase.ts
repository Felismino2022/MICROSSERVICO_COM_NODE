import { prismaClient } from "../../infra/database/prismaClient"

type CreateClientRequest = {
    nome: string
    password:string
    email:string
    phone:string
}

export class CreateClientUseCase{
    constructor(){}

    async execute(data:CreateClientRequest){

        const customer = await prismaClient.client.findFirst({
            where:{
                email:data.email
            }
        })

        if(customer) throw new Error('customer already exist')

        const customerCreated = await prismaClient.client.create({
            data:{
                ...data,
            },
        })

        return customerCreated

    }
}
