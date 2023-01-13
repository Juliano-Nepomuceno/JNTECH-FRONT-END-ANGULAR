import { Router } from '@angular/router';
import { ServicoscrudService } from './../../servicoscrud.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Servicos } from '../../servicos';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-listarporid',
  templateUrl: './listarporid.component.html',
  styleUrls: ['./listarporid.component.css']
})
export class ListarporidComponent implements OnInit {

public id: string;
public listarporid: Servicos;
public mostrartela: boolean = false;

  constructor(private busid: ServicoscrudService, private rota: Router) {

    
   }

  ngOnInit(): void {
  }

buscarporid(){
  
  this.busid.listarservicosid(this.id).subscribe(valor => this.listarporid = valor);
  this.mostrartela=true;
  console.log(this.id);
  
  
  
  



}

}
