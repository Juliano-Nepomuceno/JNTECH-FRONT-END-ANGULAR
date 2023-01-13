import { NgModule } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';








@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UsuariosModule { }
