import { Routes } from '@angular/router';
import DashboardComponent from './components/dashboard/dashboard.component';
import InformacionEasyTurnComponent from './components/informacion-easy-turn/informacion-easy-turn.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';
import  SearchTurnComponent  from './components/search-turn/search-turn.component';
import { LoginComponent } from './components/login/login.component';
import { PatientPortalComponent } from './components/patient-portal/patient-portal.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { ProfessionalPortalComponent } from './components/professional-portal/professional-portal.component';
import { authorizationGuard } from './guards/authorization.guard';

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
        path: 'search-turn',
        component:SearchTurnComponent
    }
    ,{
        path:'login/:role',
        component:LoginComponent
    },
    {
        path:'patient',
        canActivate: [authorizationGuard],
        component: PatientPortalComponent
    },
    {
        path:'admin',
        component: AdminPortalComponent,
        canActivate: [authorizationGuard]
    },
    {
        path: 'professional',
        component: ProfessionalPortalComponent,
        canActivate: [authorizationGuard]
    },
    {
        path: 'my-appointments',
        component: MyAppointmentsComponent,
    },
    {
        path:'**',
        redirectTo: ''
    }
];
