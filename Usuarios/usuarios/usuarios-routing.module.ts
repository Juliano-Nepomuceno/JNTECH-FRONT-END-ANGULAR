import { AdminGuard } from './../../guards/admin.guard';
import { AdicionarComponent } from './../../Clientes/clientes/adicionar/adicionar/adicionar.component';
import { AdicionarservicosComponent } from './../../servicoesprestados/adicionarservicos/adicionarservicos/adicionarservicos.component';
import { AtualizarusuariosComponent } from './../listar/atualizar/atualizarusuarios/atualizarusuarios.component';
import { ListartudousuariosComponent } from './../listar/listartudousuarios/listartudousuarios.component';
import { UsuariosComponent } from './usuarios.component';
import { Usuarios } from './../../logar/usuarios';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarusuariosComponent } from '../adicionar/adicionarusuarios/adicionarusuarios.component';
import { DeletarusuariosComponent } from '../deletar/deletarusuarios/deletarusuarios.component';

const routes: Routes = [
  {
path:'usuarios', component:UsuariosComponent, children:[
  {path: 'adicionar', component: AdicionarusuariosComponent},
  { path: 'listall', component:ListartudousuariosComponent,canActivateChild:[AdminGuard],
  
  children:[
    
{path: 'deletar/:id', component:DeletarusuariosComponent},
    {  path:'atualizar/:id', component:AtualizarusuariosComponent

    }]

}]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
