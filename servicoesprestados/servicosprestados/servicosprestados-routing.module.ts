import { AdminGuard } from './../../guards/admin.guard';
import { DeletarservicosprestadosComponent } from './../deletar/deletarservicosprestados/deletarservicosprestados.component';
import { AtualizarServicosComponent } from './../atualizarservicos/atualizar-servicos/atualizar-servicos.component';
import { ListarservicosComponent } from './../listarservicoes/listarservicos/listarservicos.component';
import { AdicionarservicosComponent } from './../adicionarservicos/adicionarservicos/adicionarservicos.component';
import { ListarporidComponent } from './../listarservicoes/listarporid/listarporid.component';
import { EditarservicosComponent } from './../atualizarservicos/editarservicos/editarservicos.component';
import { ServicosprestadosComponent } from './servicosprestados.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'servicosprestados', component: ServicosprestadosComponent,  
  children: [
    {path: 'editarservicos', component: EditarservicosComponent},
    {path: 'listarporid' , component: ListarporidComponent},
    {path: 'adicionarservicos', component: AdicionarservicosComponent},
    {path: 'listarservicos' , component: ListarservicosComponent, canActivateChild:[AdminGuard],
    
    children:[
    
    {path: 'deletar/:id', component: DeletarservicosprestadosComponent},
      {path: 'atualizar/:id' , component: AtualizarServicosComponent},
    {path: ':id' , component: AtualizarServicosComponent},
    ]
  },
    
   
   ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosprestadosRoutingModule { }
