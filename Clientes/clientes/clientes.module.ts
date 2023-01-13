import { CrudClientesService } from './../crud-clientes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListarTudoComponent } from './listar/listar-tudo/listar-tudo.component';
import { ClientesComponent } from './clientes.component';
import {MatTableModule} from '@angular/material/table';
import { DetalheclienteComponent } from './listar/detalhecliente/detalhecliente.component';
import { AtualizarComponent } from './listar/atualizar/atualizar/atualizar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdicionarComponent } from './adicionar/adicionar/adicionar.component';
import { AdicionarclienteComponent } from './adicionar/adicionarcliente/adicionarcliente.component';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    ListarTudoComponent,
    ClientesComponent,
    DetalheclienteComponent,
    AtualizarComponent,
    AdicionarComponent,
    AdicionarclienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
    
    
  ],

  providers: [CrudClientesService]
})
export class ClientesModule { }
