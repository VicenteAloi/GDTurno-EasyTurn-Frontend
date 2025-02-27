import { Professional } from "./professional";

export interface Institution{
    idInstitution:number,
    name:string,
    institutionAddress:string,
    institutionAddressNumber:string,
    professionals:Professional[]
}