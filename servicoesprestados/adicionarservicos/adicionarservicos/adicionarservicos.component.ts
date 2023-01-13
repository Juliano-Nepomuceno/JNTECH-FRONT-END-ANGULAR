import { Router } from '@angular/router';
import { ServicoscrudService } from './../../servicoscrud.service';
import { Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';


@Component({
  selector: 'app-adicionarservicos',
  templateUrl: './adicionarservicos.component.html',
  styleUrls: ['./adicionarservicos.component.css']
})
export class AdicionarservicosComponent implements OnInit {

  public formulario: FormGroup;
  

  constructor(private form: FormBuilder, private salvar: ServicoscrudService, private rota: Router) {

this.formulario = form.group({
Nome: [null, Validators.required],
Descricao: [null, Validators.required],
}

);

   }

verform(){

  console.log(this.formulario.value)
}

salvardados(){

  this.salvar.salvar(this.formulario.value).subscribe(valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => {console.log(' Com Sucesso'), this.rota.navigate(['/servicosprestados/listarservicos'])});

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


mostrarLista(){

}

  ngOnInit(): void {
  }

  
}
