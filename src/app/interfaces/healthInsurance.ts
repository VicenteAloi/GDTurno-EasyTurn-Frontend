import { Patient } from "./patient";

export interface HealthInsurance{
    healthInsuranceNumber:number,
    healthInsurancePlan:string,
    healthInsuranceName:string,
    healthInsuranceExpirationDate:string,
    patients:Patient[], //////////////
}