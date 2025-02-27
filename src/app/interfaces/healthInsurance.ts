import { Patient } from "./patient";

export interface HealthInsurance{
    healthInsuranceNumber:number,
    healthInsurancePlan:string,
    name:string,
    healthInsuranceExpirationDate:string,
    patients:Patient[], //////////////
}