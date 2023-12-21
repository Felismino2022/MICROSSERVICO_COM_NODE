import { kafkaConsumer } from "../kafkaConsumer";


export async function createConsumer() {

    console.log("estou escutando")
    const consumer = await kafkaConsumer("CUSTOMER_CREATE")


    await consumer.run({
        eachMessage: async({message}) => {
            const messageToString = message.value?.toString()

            console.log(messageToString)
        }
    })
    
}

createConsumer()