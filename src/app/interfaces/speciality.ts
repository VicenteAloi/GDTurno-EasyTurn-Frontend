import { Appointment } from "./appointment"
import { Professional } from "./professional"

export interface Speciality{
    idSpeciality:number,
    name:string,
    specialityDescription:string,
    professionals:Professional[],
    appointments:Appointment[]
}