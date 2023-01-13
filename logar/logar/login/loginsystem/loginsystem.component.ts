import { LogarService } from './../../../logar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginsystem',
  templateUrl: './loginsystem.component.html',
  styleUrls: ['./loginsystem.component.css']
})
export class LoginsystemComponent implements OnInit {

public UsuarioLogado: boolean = false;
public NomeUsuario: string;

  constructor(private login: LogarService) {

    this.UsuarioLogado = !this.login.resultadoLogar;
    this.NomeUsuario = this.login.NomeUsuario;
    
   }

   logout(){
this.login.resultadoLogar = false;

   }

  ngOnInit(): void {
  }

}
