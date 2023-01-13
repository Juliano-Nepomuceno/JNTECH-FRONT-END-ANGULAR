import { AdminGuard } from './../../guards/admin.guard';
import { DeletarclientesComponent } from './../deletar/deletarclientes/deletarclientes.component';
import { ErroGeralComponent } from './../../ComponentesGerais/erro-geral/erro-geral.component';
import { AdicionarclienteComponent } from './adicionar/adicionarcliente/adicionarcliente.component';
import { AdicionarComponent } from './../../Funcionario/Adicionar/adicionar/adicionar.component';
import { DetalheclienteComponent } from './listar/detalhecliente/detalhecliente.component';
import { DetalheClienteComponent } from './../listar/detalhe-cliente/detalhe-cliente.component';
import { DetalheComponent } from './../../Funcionario/Detalhe/detalhe/detalhe.component';
import { ListarTudoComponent } from './listar/listar-tudo/listar-tudo.component';
import { ClientesComponent } from './clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarComponent } from './listar/atualizar/atualizar/atualizar.component';

const routes: Routes = [

{path:'clientes', component: ClientesComponent,
children:[
  {path:'adicionar', component: AdicionarclienteComponent },
  { path:'listartudo', component: ListarTudoComponent,canActivateChild:[AdminGuard], children:[
    
    {
path:'atualizar/:id', component: AtualizarComponent

  },

  {path: 'deletar/:id', component: DeletarclientesComponent}

] },
  {path: 'detalhe/:id', component: DetalheclienteComponent },


]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
