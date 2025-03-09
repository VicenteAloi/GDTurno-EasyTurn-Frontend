import { Routes } from '@angular/router';
import DashboardComponent from './components/dashboard/dashboard.component';
import InformacionEasyTurnComponent from './components/informacion-easy-turn/informacion-easy-turn.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';
import  SearchTurnComponent  from './components/search-turn/search-turn.component';
import { LoginComponent } from './components/login/login.component';
import { PatientPortalComponent } from './components/patient-portal/patient-portal.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'info',
        component: InformacionEasyTurnComponent
    },
    {
        path: 'buscarturno',
        component:SearchTurnComponent
    },
    {
        path: 'buscarturno/Mis-turnos',
        component:MyAppointmentsComponent
    },{
        path:'login/:role',
        component:LoginComponent
    },
    {
        path:'patient',
        component: PatientPortalComponent
    }
];
