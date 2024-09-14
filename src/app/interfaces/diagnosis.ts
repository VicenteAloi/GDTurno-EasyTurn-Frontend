import { Appointment } from "./appointment";

export interface Diagnosis{
    idDiagnosis: number,
    diagnosisDescription: string,
    appointment:Appointment
}