import { FormGroup, FormBuilder } from '@angular/forms';
import { Clservico } from './../../clservico';
import { take, tap } from 'rxjs/operators';
import { Servicos } from './../../servicos';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicoscrudService } from '../../servicoscrud.service';
import { NgFor } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, map } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { Route, ActivatedRoute } from '@angular/router';







@Component({
  selector: 'app-atualizar-servicos',
  templateUrl: './atualizar-servicos.component.html',
  styleUrls: ['./atualizar-servicos.component.css']
})
export class AtualizarServicosComponent implements OnInit {

  public servicosid: any;
     //public listaid: Clservico[];
  public valorfinal: any;
  public id: any;
  public nome: string;
  public valorinput:any;
  public rotaid: any;
  public Descricao: any;
  public formulario :FormGroup;
  
  
 
  displayedColumns = ['id', 'nome','Descricao'];
  
  
  constructor(private servicos: ServicoscrudService, private rotas: Router ,  private rota: ActivatedRoute, form: FormBuilder  ) {

this.rotaid = this.rota.params.subscribe(valor => this.navegarid(valor) )
     //.pipe(tap(valorr => console.log(valorr)))
   
    //this.valorfinal=[{id: 2, Nome:"oioi"},{id:3, Nome:"oio denovo"}]
 
    //this.servicosid.subscribe()
  //this.servicosid.pipe(tap(valor => console.log(valor)  ))
   
  this.formulario =  form.group({
    Nome:['null'],
    Descricao:['null']
  }


  )

}
 
navegarid(objeto){
console.log(objeto)
  this.servicos.listarservicosid(objeto.id).subscribe(valor => this.preenchercampos(valor) )

}

verserviosid(objeto){
  console.log(objeto)
  this.servicosid = this.servicos.listarservicosid(this.valorfinal)
  .pipe(tap(valor => console.log(valor)))
  .subscribe(valor => this.preenchercampos(valor))
  
  
  
 
}


preenchercampos(objeto){
  this.id = objeto.id;
  this.nome =objeto.Nome;
  this.Descricao = objeto.Descricao;
  
  }


  setaid(){
this.rotas.navigate(['/servicosprestados/atualizarservicos/2'])

  }



  
  updateService(){
console.log(this.id)
this.servicos.EditService(this.id, this.formulario.value).subscribe(

  valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => console.log(' Com Sucesso'),);


  }
  
  erroCapturado(erro){

    alert(`Erro na operação de listar nome ${erro.name} 
      Status ${erro.status} Favor informar a equipe de TI`)
    
     }


  ngOnInit(): void {

    
  
  }


}
