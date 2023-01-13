import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private form: FormBuilder) { }


createForm(){
  this.formulario = this.form.group ({
    id:[],
    Nome:[],
    Descricao:[],
    ServicosContratados:[],
    Endereco:[],
    Responsavel:[],
    Fone:[]
  })
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
