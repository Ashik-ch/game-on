import { Routes } from '@angular/router';
import { TurfFormComponent } from './admin/turf/turf-form/turf-form.component';
import { HomeComponent } from './admin/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TurfListComponent } from './admin/turf/turf-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'turf', component: TurfListComponent },
  { path: 'turf/create', component: TurfFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
