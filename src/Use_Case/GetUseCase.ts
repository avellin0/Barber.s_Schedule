import { Appointment } from "../Entidades/Appoinment-Request";
import { AppointmentRepository } from "../Repository/Repository";

interface AppointmentsRequest {
    client: string,
    start: Date,
    end: Date,
}

type AppointmentsResponse = Appointment


export class CreateAppointmentRepository {
    constructor(private AppointmentRepositories: AppointmentRepository){ }


    async execute({ client, start, end }: AppointmentsRequest): Promise<AppointmentsResponse> {
        const app = new Appointment({ client, start, end })
        this.AppointmentRepositories.create(app)
        return app

    }

    async see() {
       const watch = await this.AppointmentRepositories.see()
        console.log(watch)
    }
}