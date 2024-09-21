import { Routes } from '@angular/router';
import DashboardComponent from './components/dashboard/dashboard.component';
import InformacionEasyTurnComponent from './components/informacion-easy-turn/informacion-easy-turn.component';
import EncontrarTurnoComponent from './components/encontrar-turno/encontrar-turno.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';

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
        component:EncontrarTurnoComponent
    },
    {
        path: 'buscarturno/Mis-turnos',
        component:MyAppointmentsComponent
    }
];
