import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { TurfCardComponent } from './turf/turf-card';
import { TurfFormComponent } from './turf/turf-form';

export default [
    { path: 'turf', component: TurfCardComponent },
    { path: 'turf/create', component: TurfFormComponent },
    { path: 'turf/update/:id', component: TurfFormComponent },
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
