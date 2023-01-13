import { DeletaragendamentoComponent } from './../deletar/deletaragendamento/deletaragendamento.component';
import { UsuarioGuard } from './../../guards/usuario.guard';
import { AdminGuard } from './../../guards/admin.guard';
import { BuscarAgendamentoComponent } from './../outrosComponentes/buscar-agendamento/buscar-agendamento.component';
import { CriaragendamentoComponent } from './../criar/criaragendamento/criaragendamento.component';
import { AtualizaragendamentoComponent } from './../atualizar/atualizaragendamento/atualizaragendamento.component';
import { AgendamentoComponent } from './agendamento.component';
import { ListAllAgendamentoComponent } from './../listar/list-all-agendamento/list-all-agendamento.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';

const routes: Routes = [

{path:"agendamento", component:AgendamentoComponent, 
children:[
  {path: "adicionar", component: CriaragendamentoComponent},
  {path: "buscar" , component: BuscarAgendamentoComponent},
  {path:"listall", component:ListAllAgendamentoComponent, canActivateChild:[AdminGuard],
  
  children:[
    {path: "atualizar/:id", component: AtualizaragendamentoComponent  },
    {path: "deletar/:id", component: DeletaragendamentoComponent  },
  ]


},
  
]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoRoutingModule { }
