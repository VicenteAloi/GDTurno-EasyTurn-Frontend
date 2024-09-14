import { TimeInterval } from "rxjs/internal/operators/timeInterval";

export interface Appointment{
    idAppointment:number,
    appointmentDate:Date,
    appointmentTime:Date,
    appointmentStatus:string,
    patientValoration:string,
    patientEmail:string,
    professionalRegistration:string,


}