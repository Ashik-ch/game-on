import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { TurfListComponent } from './turf/turf-list';
import { TurfFormComponent } from './turf/turf-form';

export default [
    { path: 'turf', component: TurfListComponent },
    { path: 'turf/create', component: TurfFormComponent },
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
