import { Agendamento } from './../../agendamento';
import { formatDate, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { CrudAgendamentoService } from './../../crud-agendamento.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Type } from '@angular/compiler';


@Component({
  selector: 'app-criaragendamento',
  templateUrl: './criaragendamento.component.html',
  styleUrls: ['./criaragendamento.component.css']
})
export class CriaragendamentoComponent implements OnInit {

public formulario: FormGroup
public mostrarerro: boolean = false
public checarcampo: string



  constructor(private form: FormBuilder, private crudagendamento: CrudAgendamentoService, private rota: Router ) 
  {

this.formulario = this.form.group({
  Data:[null, Validators.required ],
  Empresa:[null, Validators.required],
  DescricaoAtividade:[null, Validators.required],
  Endereco:[null, Validators.required],
  Responsavel:[null, Validators.required],
  Funcionario:[null, Validators.required]


})





   }

   showError(){
    this.mostrarerro = false
    this.mostrarerro = !this.mostrarerro
    return this.mostrarerro


   }

create(){

  console.log(this.formulario)
  this.crudagendamento.create(this.formulario.value).subscribe(valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => {console.log(' Com Sucesso'), alert('adicionado com sucesso')},);

this.rota.navigate(['/agendamento/listall'])
}


resetchecarcampo(){
  this.checarcampo =''
}

erroCapturado(erro){

  alert(`Erro na operação de listar nome ${erro.name} 
    Status ${erro.status} Favor informar a equipe de TI`)
  
   }

verificaCampoFoco(campo){
  
  
  

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
