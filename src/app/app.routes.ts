import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:() => import('./components/dashboard/dashboard.component'),
    },
    {
        path: 'info',
        loadComponent:() => import('./components/informacion-easy-turn/informacion-easy-turn.component'),
    },
    {
        path: 'buscarturno',
        loadComponent:() => import('./components/encontrar-turno/encontrar-turno.component'),
    }
];
