import { Router } from '@angular/router';
import { CrudusuariosService } from './../../crudusuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionarusuarios',
  templateUrl: './adicionarusuarios.component.html',
  styleUrls: ['./adicionarusuarios.component.css']
})
export class AdicionarusuariosComponent implements OnInit {
public formulario: FormGroup;
  constructor(private form: FormBuilder, private crudusuario: CrudusuariosService, private rota: Router) {


    this.formulario = this.form.group({

      Nome:[null, Validators.required],
      Senha:[null, Validators.required],
      Grupo:[null, Validators.required]
    })

   }



   erroCapturado(erro){

    alert(`Erro na operação de listar nome ${erro.name} 
      Status ${erro.status} Favor informar a equipe de TI`)
    
     }
   createUser(){

    console.log(this.formulario.value)
    this.crudusuario.criar(this.formulario.value).subscribe(valor =>  console.log(valor),
    error => this.erroCapturado(error),
    () => console.log(' Com Sucesso'),);
    this.rota.navigate(['usuarios/listall'])
    
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
