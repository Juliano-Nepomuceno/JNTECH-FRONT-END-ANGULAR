import { CrudFuncionarioService } from './../../funcionario/crud-funcionario.service';
import { Funcionario } from './../../funcionario';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { __param } from 'tslib';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {


  private id: any;
  public FuncionarioId: any;

  
  constructor(private rota: ActivatedRoute, private crudservico: CrudFuncionarioService) { 

this.rota.params.subscribe(valor => this.id = valor['id']);
//console.log(this.id)

//this.FuncionarioId = crudservico.listById(this.id);
crudservico.listById(this.id).subscribe(valor => this.preencherCampos(valor))

  }


preencherCampos(objeto){

  this.FuncionarioId = objeto;
  console.log(this.FuncionarioId)
}

  ngOnInit(): void {
  }

}
