import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoComponent } from './agendamento.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AgendamentoComponent
  ],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
    

  ]
})
export class AgendamentoModule { }
