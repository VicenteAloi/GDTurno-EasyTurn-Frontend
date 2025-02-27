import { Appointment } from "./appointment";
import { HealthInsurance } from "./healthInsurance";

export interface Patient{
    idPatient:number,
    firstName:string,
    lastName:string,
    IDCardNumber:number,
    patientEmail:string,
    birthDate:Date,
    gender:string,
    phoneNumber:string,
    appointments:Appointment[],
    healthInsurances:HealthInsurance[];
}