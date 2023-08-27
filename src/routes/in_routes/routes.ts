import { Router } from "express"

import { CreateAppointment } from "../../Controller/CreateAppointment";
import { CheckAppointments } from "../../Controller/CreateAppointment";

const Create_Appointments = new CreateAppointment()
const Check_Appointments = new CheckAppointments()

const url = Router()

url.post('/new_appointment', Create_Appointments.handle)
url.get('/pull_appointments', Check_Appointments.handle)



export {url}