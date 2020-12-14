import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule,  } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatTabsModule } from '@angular/material/tabs'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //this to use ngModule
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatTreeModule } from '@angular/material/tree'; 
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    MatPaginatorModule,
    MatProgressBarModule,
    SweetAlert2Module,
    MatTreeModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
