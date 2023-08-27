import { expect, test } from "vitest"
import { CreateAppointment } from "./GetUseCase"
import { InMemoryRepository } from "../Repository/in-memory/in-memory-repository";

test('Create an Appointment', () => {

    const start = new Date();
    const end = new Date();

    start.setDate(start.getDate() + 1);
    end.setDate(end.getDate() + 2)

    const AppointmentRepository = new InMemoryRepository()
    const app = new CreateAppointment(AppointmentRepository);

    expect(app.execute({
        client: "john Doe",
        start,
        end 
    })).resolves

    expect(app.execute({
        client: "fulano",
        start,
        end
    })).resolves

    // expect(app.see())

})

