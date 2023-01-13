import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudusuariosService } from './../../../crudusuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../../../logar/usuarios';
import { identity } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-atualizarusuarios',
  templateUrl: './atualizarusuarios.component.html',
  styleUrls: ['./atualizarusuarios.component.css']
})
export class AtualizarusuariosComponent implements OnInit {
public usuarios: any
public formulario: FormGroup


  constructor(private crudusuarios: CrudusuariosService, private rota: ActivatedRoute,private rotanavegar: Router, private form: FormBuilder) {
this.rota.params.subscribe(valor => this.getId(valor['id']))

    
   }

  ngOnInit(): void {
  }

getId(id){
this.crudusuarios.listById(id).subscribe(valor => this.preencherCampos(valor))

}

preencherCampos(objeto){
this.usuarios = objeto
console.log(this.usuarios)
this.formulario = this.form.group({

  Nome:[this.usuarios.Nome],
  Senha:[this.usuarios.Senha],
  Grupo:[this.usuarios.Grupo]
})

}


update(){
console.log(this.formulario.value)
this.crudusuarios.update(this.usuarios.id, this.formulario.value).subscribe(
  valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => console.log(' Com Sucesso'),);
  

this.rotanavegar.navigate(['/usuarios/listall/atualizar'])

}


erroCapturado(erro){

  alert(`Erro na operação de listar nome ${erro.name} 
    Status ${erro.status} Favor informar a equipe de TI`)
  
   }

delete(id){

  this.crudusuarios.criar(id).subscribe(

    valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => console.log(' Com Sucesso'),);
  
}
}
