import { ServicosprestadosModule } from './servicoesprestados/servicosprestados/servicosprestados.module';
import { UsuariosModule } from './Usuarios/usuarios/usuarios.module';
import { UsuariosComponent } from './Usuarios/usuarios/usuarios.component';
import { AgendamentoModule } from './Agendamento/agendamento/agendamento.module';
import { ClientesRoutingModule } from './Clientes/clientes/clientes-routing.module';
import { ClientesModule } from './Clientes/clientes/clientes.module';
import { UsuarioGuard } from './guards/usuario.guard';
import { LogarService } from './logar/logar.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AdicionarservicosComponent } from './servicoesprestados/adicionarservicos/adicionarservicos/adicionarservicos.component';
import { ServicoscrudService } from './servicoesprestados/servicoscrud.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Servicos } from './servicoesprestados/servicos';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import {MatIconModule} from '@angular/material/icon';
//import { FormsModule, RadioControlValueAccessor, FormGroup } from '@angular/forms';
import { ServicosprestadosComponent } from './servicoesprestados/servicosprestados/servicosprestados.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {} from '@angular/material/card';
//import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AtualizarServicosComponent } from './servicoesprestados/atualizarservicos/atualizar-servicos/atualizar-servicos.component';
import { NgFor } from '@angular/common';
import { filter } from 'rxjs';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { LogarComponent } from './logar/logar/logar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ListarporidComponent } from './servicoesprestados/listarservicoes/listarporid/listarporid.component';
import { EditarservicosComponent } from './servicoesprestados/atualizarservicos/editarservicos/editarservicos.component';
import { NgIf } from '@angular/common';
import { FuncionarioRoutingModule } from './Funcionario/funcionario/funcionario-routing.module';
import { FuncionarioModule } from './Funcionario/funcionario/funcionario.module';
import { ListAllComponent } from './Funcionario/Listar/list-all/list-all.component';
import { DetalheComponent } from './Funcionario/Detalhe/detalhe/detalhe.component';
import { AtualizarComponent } from './Funcionario/Atualizar/atualizar/atualizar.component';
import { AdicionarComponent } from './Funcionario/Adicionar/adicionar/adicionar.component';
import { ListartudoComponent } from './Clientes/listar/listartudo/listartudo.component';
import { DetalheClienteComponent } from './Clientes/listar/detalhe-cliente/detalhe-cliente.component';
import { ListAllAgendamentoComponent } from './Agendamento/listar/list-all-agendamento/list-all-agendamento.component';
import { AtualizaragendamentoComponent } from './Agendamento/atualizar/atualizaragendamento/atualizaragendamento.component';
import { CriaragendamentoComponent } from './Agendamento/criar/criaragendamento/criaragendamento.component';
import { ListartudousuariosComponent } from './Usuarios/listar/listartudousuarios/listartudousuarios.component';
import { AtualizarusuariosComponent } from './Usuarios/listar/atualizar/atualizarusuarios/atualizarusuarios.component';
import { AdicionarusuariosComponent } from './Usuarios/adicionar/adicionarusuarios/adicionarusuarios.component';
import { BuscarAgendamentoComponent } from './Agendamento/outrosComponentes/buscar-agendamento/buscar-agendamento.component';
import { ErroGeralComponent } from './ComponentesGerais/erro-geral/erro-geral.component';
import { NgModel } from '@angular/forms';
import { ServicosprestadosRoutingModule } from './servicoesprestados/servicosprestados/servicosprestados-routing.module';
import { DeletaragendamentoComponent } from './Agendamento/deletar/deletaragendamento/deletaragendamento.component';
import { LoginsystemComponent } from './logar/logar/login/loginsystem/loginsystem.component';
import { DeletarclientesComponent } from './Clientes/deletar/deletarclientes/deletarclientes.component';
import { DeletarfuncionarioComponent } from './Funcionario/deletar/deletarfuncionario/deletarfuncionario.component';
import { DeletarservicosprestadosComponent } from './servicoesprestados/deletar/deletarservicosprestados/deletarservicosprestados.component';
import { DeletarusuariosComponent } from './Usuarios/deletar/deletarusuarios/deletarusuarios.component';







@NgModule({
  
  declarations: [
    AppComponent,
    
    LoginComponent,
    HomeComponent,
  
    LogarComponent,
    
    EditarservicosComponent,
    ListAllComponent,
    DetalheComponent,
    AtualizarComponent,
    AdicionarComponent,
    ListartudoComponent,
    DetalheClienteComponent,
    ListAllAgendamentoComponent,
    AtualizaragendamentoComponent,
    CriaragendamentoComponent,
    ListartudousuariosComponent,
    AtualizarusuariosComponent,
    AdicionarusuariosComponent,
    BuscarAgendamentoComponent,
    ErroGeralComponent,
    LogarComponent,
    DeletaragendamentoComponent,
    LoginsystemComponent,
    DeletarclientesComponent,
    DeletarfuncionarioComponent,
    DeletarservicosprestadosComponent,
    DeletarusuariosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgFor,
    NgbModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule,
    NgIf,
    FuncionarioRoutingModule,
    ClientesRoutingModule,
    AgendamentoModule,
    UsuariosModule,
    ServicosprestadosRoutingModule,
    
    
    
    
    
    
    
  
    
    
    
    
    
    
   
 ],
  exports:[

    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    [BsDropdownModule, TooltipModule, ModalModule],
    NgFor
    
    
  ],
  
  providers: [ServicoscrudService, Servicos, LogarService, UsuarioGuard, FormsModule, FuncionarioModule, ClientesModule, AgendamentoModule, UsuariosComponent,ServicosprestadosModule ],
  bootstrap: [AppComponent]


})
export class AppModule { }
