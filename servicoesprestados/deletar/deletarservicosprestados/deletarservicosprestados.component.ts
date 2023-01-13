import { ServicoscrudService } from './../../servicoscrud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletarservicosprestados',
  templateUrl: './deletarservicosprestados.component.html',
  styleUrls: ['./deletarservicosprestados.component.css']
})
export class DeletarservicosprestadosComponent implements OnInit {

  constructor(private rotaativa: ActivatedRoute, private rota: Router, private crudprestarsservicos: ServicoscrudService)
  
  
  {

this.rotaativa.params.
subscribe(valor => this.crudprestarsservicos.delete(valor['id']).subscribe(
valor => console.log(valor),
error => alert(error),
() =>{alert('deletado com sucesso'), this.rota.navigate(['/servicosprestados/listarservicos']).then(() => window.location.reload() ) }


))


   }

  ngOnInit(): void {
  }

}
