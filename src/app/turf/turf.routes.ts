import { Routes } from "@angular/router";
import { Empty } from "../admin/empty/empty";
import { TurfHomeComponent } from "./turf-home";



export default [
    { path: '', component: TurfHomeComponent },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
