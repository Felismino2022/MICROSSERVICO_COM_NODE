import { prismaClient } from "../../infra/database/prismaClient"
import { kafkaSendMessage } from "../../infra/provider/kafka/producer"

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

        const kafkaProducer = new kafkaSendMessage()

        await kafkaProducer.execute("CUSTOMER_CREATE", customerCreated)

        return customerCreated

    }
}
