import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemasComponent } from '../expansion/sistemas/sistemas.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {path: 'expansion', component: SistemasComponent},
  {path: 'roles', component: RolesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpansionRoutingModule { }
