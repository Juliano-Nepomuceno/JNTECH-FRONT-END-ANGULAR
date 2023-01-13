import { ListAllComponent } from './../../Listar/list-all/list-all.component';
import { Router } from '@angular/router';
import { CrudFuncionarioService } from './../../funcionario/crud-funcionario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {


  public formulario: FormGroup;
  constructor(private form: FormBuilder, private Crudfun: CrudFuncionarioService, private rota: Router) { 

    this.formulario = form.group({

      
      Nome:[null, Validators.required],
      Cpf:[null, Validators.required],
      Endereco:[null, Validators.required],
      Fone:[null, Validators.required],
      Cargo:[null, Validators.required],
      DataNascimento:[null, Validators.required]


    })
  }

  ngOnInit(): void {
  }

create(){
console.log(this.formulario.value)

  this.Crudfun.createForm(this.formulario.value).subscribe(valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => console.log(' Com Sucesso'),);
  this.rota.navigate(['funcionario/listall'])
  
}


erroCapturado(erro){

  alert(`Erro na operação de listar nome ${erro.name} 
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


}
