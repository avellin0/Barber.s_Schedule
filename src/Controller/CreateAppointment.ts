import { Request, Response } from "express"
import { ClientePrisma } from "../database/prismaDB"
import { Appointment } from "../Entidades/Appoinment-Request"
import { CreateAppointmentRepository } from "../Use_Case/GetUseCase"

export class CreateAppointment {
    async handle(req: Request, res: Response) {

        const start = new Date()
        const end = new Date()

        start.setDate(start.getDate() + 2)
        end.setDate(end.getDate() + 1)

        
        const agenda = new Appointment({
            client: "john doe",
            start,
            end
        })

        const { client } = req.body;


        


        if (agenda) {
            const app = await ClientePrisma.appointment.create({
                data: {
                    client,
                    start: agenda.start,
                    end: agenda.end
                }
            })

            return res.status(200).json(app)
        }
    }
}

export class CheckAppointments{
    async handle(req:Request, res:Response){
        const find = await ClientePrisma.appointment.findMany()

        res.json(find)   
     }
}