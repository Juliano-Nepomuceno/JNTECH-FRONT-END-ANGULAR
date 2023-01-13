import { Route, Router, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicoscrudService } from './../../servicoscrud.service';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BoundElementProperty, ElementSchemaRegistry } from '@angular/compiler';
import { Servicos } from '../../servicos';
import { KeyValuePipe } from '@angular/common';




@Component({
  selector: 'app-listarservicos',
  templateUrl: './listarservicos.component.html',
  styleUrls: ['./listarservicos.component.css']
})
export class ListarservicosComponent implements OnInit {
public navegarid :any;
lista: any;
//listateste: Iservicos[] = [{"id": 2, Nome: "java"}];
displayedColumns = ['id','nome','Descricao','Atualizar','Excluir'];
private resultado : any;
public busid: any;
public valoratualizado: any;
public valor: any;
public id: any;
public rotaid: any;
public todaLista: string;
public showListAll :boolean =false;
public Select : string;
public ShowSelectId :boolean = false;
public idSelect :string ='';
//public servicosid: any;

 //listaservicos: Iservicos[] = [{id: '8', Nome: 'infraestutura'}];
   constructor(
    private listando: ServicoscrudService, 
    private servpre: Servicos,
    private rotass: Router,
    

    

    ) {
   //private listajsonn = JSON.stringify(this.Servpre);

 listando.listarservicos().subscribe(valor =>  this.preencherCampos(valor),
  error => this.erroCapturado(error),
  () => console.log(' Com Sucesso'),);
  

  
  }
  
  
  erroCapturado(erro){

    alert(`Erro na operação de listar nome ${erro.name} 
      Status ${erro.status} Favor informar a equipe de TI`)
    
     }


     preencherCampos(objeto){
this.lista = objeto

     }
  salvar(){
   this.valoratualizado = this.valor;
   console.log(this.valoratualizado)

  }
  
  menssagem(){
  alert("Obrigado Deus");

}




  
  iratualizar(){
 
  this.rotass.navigate([`/servicosprestados/atualizarservicos/${this.valor}`])
 
  
 }

/*buscarid(eventos: KeyboardEvent){
 this.valorde  = (<HTMLInputElement>eventos.target).value;
  console.log(this.valorde);
}
*/
mostrarLista(){


  this.showListAll = true;

}

eventoSelect(){
  console.log(this.Select)
  if(this.Select =="todaLista"){

this.showListAll =true
return  }

if (this.Select = "PorID"){
  this.ShowSelectId = true;
  console.log("selecione o ID")

}

  


}

delete(id){
this.listando.delete(id).subscribe(valor =>  console.log(valor),
error => this.erroCapturado(error),
() => console.log(' Com Sucesso'),);
}

ngOnInit(): void {


}

}


  


