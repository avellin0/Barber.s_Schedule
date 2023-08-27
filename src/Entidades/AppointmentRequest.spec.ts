import { expect, test } from "vitest"
import { Appointment } from "./Appoinment-Request"

test('should be able to create an appointment', () => {

    const start = new Date()
    const end = new Date()

    start.setDate(start.getDate() + 1)
    end.setDate(end.getDate() + 2)

    const appointment = new Appointment({
        client: "john doe",
        start,
        end
    })

    expect(appointment).toBeInstanceOf(Appointment)
})


test(" Shouldn't be able create an appointment with End less than start ", () => {
    const start = new Date()
    const end = new Date()

    start.setDate(start.getDate() + 2)
    end.setDate(end.getDate() + 1)


    expect(() => {
        return new Appointment({
            client: "fulano",
            start,
            end
        })
    }).toThrow()
})

