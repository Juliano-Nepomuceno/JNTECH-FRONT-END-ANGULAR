import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cliente } from './../../cliente';
import { CrudClientesService } from './../../../crud-clientes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-tudo',
  templateUrl: './listar-tudo.component.html',
  styleUrls: ['./listar-tudo.component.css']
})
export class ListarTudoComponent implements OnInit {
public clientes :any
displayedColumns: string[] = ['id','Nome','Descricao','ServicosContratados','Endereco','Responsavel','Fone', 'Atualizar', 'Deletar' ];
public erro: String;


  constructor(private crudcliente:CrudClientesService, private rota: Router) { 

this.crudcliente.ListAll().subscribe(
valor =>  this.preencherCapos(valor),
error => this.erroCapturado(error),
() => console.log(' Com Sucesso'),

 

);

  
  }




 erroCapturado(erro){

alert(`Erro na operação de listar nome ${erro.name} 
  Status ${erro.status} Favor informar a equipe de TI`)

 }

  preencherCapos(objeto){
this.clientes = objeto
//console.log(this.clientes)

  }
  
  delete(id){
    this.crudcliente.delete(id).subscribe(valor =>  console.log(valor),
    error => this.erroCapturado(error),
    () => console.log(' Com Sucesso'),);
    this.rota.navigate(['clientes/listartudo'])
  }
  ngOnInit(): void {
  }

}

