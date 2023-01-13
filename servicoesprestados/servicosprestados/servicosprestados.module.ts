import { ServicosprestadosComponent } from './servicosprestados.component';
import { AdicionarservicosComponent } from './../adicionarservicos/adicionarservicos/adicionarservicos.component';
import { ListarservicosComponent } from './../listarservicoes/listarservicos/listarservicos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ServicosprestadosRoutingModule } from './servicosprestados-routing.module';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AtualizarServicosComponent } from '../atualizarservicos/atualizar-servicos/atualizar-servicos.component';
import { ListarporidComponent } from '../listarservicoes/listarporid/listarporid.component';


@NgModule({
  declarations: [
ListarservicosComponent,
AdicionarservicosComponent,
AtualizarServicosComponent,
ServicosprestadosComponent,
ListarporidComponent


  ],
  imports: [
    CommonModule,
    ServicosprestadosRoutingModule,
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule


  ]
})
export class ServicosprestadosModule { }
