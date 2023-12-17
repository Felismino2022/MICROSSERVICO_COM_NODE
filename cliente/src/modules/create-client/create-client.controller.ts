import { CreateClientUseCase } from "./create-client.usecase";
import { Request, Response } from "express";


export class CreateCustomerController{
    constructor(){}

    async handle(request:Request, response:Response){

        const useCase = new CreateClientUseCase()

        try {
            const result = await useCase.execute(request.body)
            return response.json(result)
        } catch (error) {

            console.log(error)
            return response.status(400).json(error)   
        }

    }
}