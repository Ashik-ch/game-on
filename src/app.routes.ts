import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/admin/dashboard/dashboard';
import { Documentation } from './app/admin/documentation/documentation';
import { Landing } from './app/admin/landing/landing';
import { Notfound } from './app/admin/notfound/notfound';
// import { HomeComponent } from './app/pages/admin/home/home.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            // { path: '', component: HomeComponent },
            { path: 'uikit', loadChildren: () => import('./app/admin/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'admin', loadChildren: () => import('./app/admin/admin.routes') }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/admin/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
