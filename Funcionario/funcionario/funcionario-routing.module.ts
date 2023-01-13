import { AdminGuard } from './../../guards/admin.guard';
import { DeletarfuncionarioComponent } from './../deletar/deletarfuncionario/deletarfuncionario.component';
import { AdicionarComponent } from './../Adicionar/adicionar/adicionar.component';
import { AtualizarComponent } from './../Atualizar/atualizar/atualizar.component';
import { DetalheComponent } from './../Detalhe/detalhe/detalhe.component';
import { ListAllComponent } from './../Listar/list-all/list-all.component';
import { FuncionarioComponent } from './funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path:'funcionario', component: FuncionarioComponent , 

  children:[
{path: 'detalhe/:id', component: DetalheComponent},
{path: 'adicionar', component: AdicionarComponent},   
{path: 'listall', component: ListAllComponent ,canActivateChild:[AdminGuard], children:[
{path: 'atualizar/:id', component: AtualizarComponent},
{path: 'deletar/:id', component: DeletarfuncionarioComponent},
  {
    path: 'detalhe/:id', component: DetalheComponent
  }
]

}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
