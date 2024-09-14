import { Appointment } from "./appointment"
import { Institution } from "./institution"

export interface Professional{
    idProfessional:number,
    professionalRegistration:string,
    professionalName:string,
    appointments:Appointment[],
    institutions:Institution[],
    specialities:string,
}