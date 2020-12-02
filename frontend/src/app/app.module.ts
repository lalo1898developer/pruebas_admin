import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';  
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeModule } from './modules/tree/tree.module';
import { ExpansionModule } from './modules/expansion/expansion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ExpansionModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
