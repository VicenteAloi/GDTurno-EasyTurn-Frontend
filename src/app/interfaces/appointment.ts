
import { Patient } from "./patient";
import { Professional } from "./professional";

import { Diagnosis } from "./diagnosis";
import { Speciality } from "./speciality";

export interface Appointment{
    idAppointment:number,
    appointment_datetime:Date,
    status:string,
    valoration:string,
    patient:Patient,
    professional:Professional,
    diagnosis: Diagnosis,
    speciality:Speciality
}