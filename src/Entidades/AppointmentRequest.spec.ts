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


test('should get the difference between the start and End', async () => {
        
        const start = new Date()
        const end = new Date()

        start.setDate(start.getDate() + 12)
        end.setDate(end.getDate() + 17)

        const string_start = String(start)
        const string_End = String(end)




        const start_1 = string_start.slice(8,10)
        const start_2 = Number(start_1)
        
        const ends_1 = string_End.slice(8,10)
        const ends_2 = Number(ends_1)

        let DB = [0]


        for (let x = start_2; x < ends_2; x++) {
            DB.push(x)
        }


        const inicio = 18;
        const fim = 20


        if (DB.includes(inicio) || DB.includes(fim)) {
            throw new Error("Data ocupada!")  
        }

        expect(() => {
            return new Appointment({
                client: "fulano",
                start,
                end
            })
        }).toBeTruthy()

   
})

