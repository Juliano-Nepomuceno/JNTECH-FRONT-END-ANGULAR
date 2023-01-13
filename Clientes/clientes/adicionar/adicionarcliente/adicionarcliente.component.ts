import { Router } from '@angular/router';
import { CrudClientesService } from './../../../crud-clientes.service';
import { Cliente } from './../../cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionarcliente',
  templateUrl: './adicionarcliente.component.html',
  styleUrls: ['./adicionarcliente.component.css']
})
export class AdicionarclienteComponent implements OnInit {

public formulario: FormGroup

  constructor(private form: FormBuilder, private crudcliente: CrudClientesService, private rota: Router) {

    this.formulario = this.form.group({
      id:[null, Validators.required],
      Nome:[null, Validators.required],
      Descricao:[null, Validators.required],
      ServicosContratados:[null, Validators.required],
      Endereco:[null, Validators.required],
      Responsavel:[null, Validators.required],
      Fone:[null, Validators.required]
      
      
      })
   }


createForm(){

  

}


create(){

  console.log(this.formulario.value)
  this.crudcliente.create(this.formulario.value).subscribe(  valor => console.log(valor), error => this.erroCapturado(error),
  () => console.log(' Com Sucesso'),
  )
  this.rota.navigate(['clientes/listartudo'])

}

erroCapturado(erro){

  alert(`Erro na operação de Criar ${erro.name} 
    Status ${erro.status} Favor informar a equipe de TI`)
  
   }
  

   utilizarCSSError(campo){

  

    if(!this.formulario.get(campo).valid  && 
    this.formulario.get(campo).touched){
      
     return 'form-control is-invalid'
    }  
    if(this.formulario.get(campo).valid  && 
    this.formulario.get(campo).touched){
    
    return'form-control is-valid'
    
    
    }
    else{
      return 'form-control'
    }
    }

  ngOnInit(): void {
  }

}
