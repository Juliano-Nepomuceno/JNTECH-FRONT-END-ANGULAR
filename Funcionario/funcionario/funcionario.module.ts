import { CrudFuncionarioService } from './crud-funcionario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from '../funcionario/funcionario.component';
import { NgModel } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    MatIconModule,
    MatButtonModule
    
    
  ],

  providers: [CrudFuncionarioService]


})
export class FuncionarioModule { }



