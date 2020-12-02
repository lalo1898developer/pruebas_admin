import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';  
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //this to use ngModule
import { MatSelectModule } from '@angular/material/select'; 

import { TreeRoutingModule } from './tree-routing.module';
import { SystemsTreeComponent } from './systems-tree/systems-tree.component';
import { TreeSencilloComponent } from './tree-sencillo/tree-sencillo.component';
import { SistemasComponent } from './sistemas/sistemas.component';


@NgModule({
  declarations: [SystemsTreeComponent, TreeSencilloComponent, SistemasComponent],
  imports: [
    CommonModule,
    TreeRoutingModule,
    MatTreeModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class TreeModule { }
