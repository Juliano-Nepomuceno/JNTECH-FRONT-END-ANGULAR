import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuarios } from './../usuarios';
import { Component, OnInit } from '@angular/core';
import { LogarService } from '../logar.service';
import { NgModel, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  public nome: string;
  public senha: string;
  public usuario: Usuarios;
  public formulario: FormGroup;
  //public listausuariosarray = {Nome:'juliano', Senha:'juliano'}
public resultadologin :any;



  constructor(private form: FormBuilder ,private listausuario: LogarService, private rota : Router) { 
    //this.listausuario.listarUsuario()
    //.subscribe(valor => this.prenenchercampos(valor))

    this.formulario = this.form.group(
{
nome:[''],
senha:['']

}


    )
        
  }

//prenenchercampos(objeto){
//this.usuario = objeto.Usuario;
//this.senha = objeto.Senha;


//}

verificarusuariologado(){
 //console.log(this.listausuariosarray)
 
console.log(this.formulario.value)
 





 
 this.resultadologin = this.listausuario.autenticar(this.formulario.value)
  console.log(this.resultadologin)
  
  this.rota.navigate([''])



  
}



  ngOnInit(): void {
  }



}
