import { Professional } from "./professional";

export interface Institution{
    idInstitution:number,
    institutionName:string,
    institutionAddress:string,
    institutionAddressNumber:string,
    professionals:Professional[]

}