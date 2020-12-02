import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemasComponent } from './sistemas/sistemas.component';
import { SystemsTreeComponent } from './systems-tree/systems-tree.component';
import { TreeSencilloComponent } from './tree-sencillo/tree-sencillo.component';

const routes: Routes = [
    {path: 'tree', component: SystemsTreeComponent},
    {path: 'tree2', component: TreeSencilloComponent},
    {path: 'sistemas', component: SistemasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
