import { Appointment } from "../../Entidades/Appoinment-Request";
import { AppointmentRepository } from "../Repository";

export class InMemoryRepository implements AppointmentRepository {
    public DB: Appointment[] = [];

    async create(appointment: Appointment): Promise<void> {
        this.DB.push(appointment)
    }

    async see() {
        const items = await this.DB.map((user) => {
            if (user) {
                console.log(user);
            }

        })

        return items
    }
}