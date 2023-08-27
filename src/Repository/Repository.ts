import { Appointment } from "../Entidades/Appoinment-Request";

export interface AppointmentRepository {
    create(appointment: Appointment): Promise<void>;
    see()
} 