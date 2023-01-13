import { Cliente } from './../../cliente';
import { CrudClientesService } from './../../../crud-clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhecliente',
  templateUrl: './detalhecliente.component.html',
  styleUrls: ['./detalhecliente.component.css']
})
export class DetalheclienteComponent implements OnInit {

private id: any;
public resultado: Cliente;
displayedColumns: string[] = ['ID', 'Nome'];

  constructor(private rota: ActivatedRoute, private crudcliente: CrudClientesService) { 
    this.rota.params.subscribe(valor => this.preencherCamposId(valor))
    console.log(this.id)
  }
  
  preencherCamposId(id){
    this.id = id['id'];
    
    this.crudcliente.listById(this.id).subscribe(valor => this.preencherCamposResultado(valor))


  }
  
preencherCamposResultado(objeto){
this.resultado = objeto
console.log(this.resultado)

}

  ngOnInit(): void {
  }

}
