import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { SystemsComponent } from '../systems/systems/systems.component'

const routes: Routes = [
  {path: 'systems', component: SystemsComponent, canActivate: [AuthGuard]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemsRoutingModule { }
