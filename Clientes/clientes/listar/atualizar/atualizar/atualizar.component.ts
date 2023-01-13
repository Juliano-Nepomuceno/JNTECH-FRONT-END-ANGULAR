import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from './../../../cliente';
import { CrudClientesService } from './../../../../crud-clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {


  private id: any;
  public resultado: Cliente;
  public formulario: FormGroup;
  
    constructor(private rota: ActivatedRoute, private crudcliente: CrudClientesService, private form: FormBuilder) { 
      this.rota.params.subscribe(valor => this.preencherCamposId(valor))
      console.log(this.id)
    }
    
    preencherCamposId(id){
      this.id = id['id'];
      
      this.crudcliente.listById(this.id).subscribe(
        valor => this.preencherCamposResultado(valor),
      error => this.erroCapturado(error),
() => console.log(' Com Sucesso'),
)
  
  
    }
    
  preencherCamposResultado(objeto){
  this.resultado = objeto
  console.log(this.resultado)

  this.formulario = this.form.group({
    id:[this.resultado.id],
    Nome:[this.resultado.Nome],
    Descricao:[this.resultado.Descricao],
    ServicosContratados:[this.resultado.ServicosContratados],
    Endereco:[this.resultado.Endereco],
    Responsavel:[this.resultado.Responsavel],
    Fone:[this.resultado.Fone]
    
    
    })
    
  
  }

  
updateCliente(){
  console.log(this.resultado)
  this.crudcliente.update(this.formulario.value.id, this.formulario.value).subscribe(

   
error => this.erroCapturado(error),
() => console.log(' Com Sucesso'),

  )

}
  
erroCapturado(erro){

  alert(`Erro na operação de Criar, nome ${erro.name} 
    Status ${erro.status} Favor informar a equipe de TI`)
  
   }


  ngOnInit(): void {
  }

}
