import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatTreeModule } from '@angular/material/tree'; 

import { ExpansionRoutingModule } from './expansion-routing.module';
import { SistemasComponent } from './sistemas/sistemas.component';
import { RolesComponent } from './roles/roles.component';


@NgModule({
  declarations: [SistemasComponent, RolesComponent],
  imports: [
    CommonModule,
    ExpansionRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    SweetAlert2Module,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTreeModule
  ]
})

export class ExpansionModule {
  
 }
