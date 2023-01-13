import { CrudusuariosService } from './../../crudusuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletarusuarios',
  templateUrl: './deletarusuarios.component.html',
  styleUrls: ['./deletarusuarios.component.css']
})
export class DeletarusuariosComponent implements OnInit {

  constructor(private rotaativa: ActivatedRoute, 
    private crudusuarios: CrudusuariosService, 
    private rota:  Router) {

this.rotaativa.params.subscribe(

  valor => this.crudusuarios.delete(valor['id']).subscribe(
    valor => console.log(valor),
    error => alert(error),
    () => {alert('deletado com sucesso'), 
    this.rota.navigate(['/usuarios/listall']).
    then(()=> window.location.reload() )}
    
  )
)


   }

  ngOnInit(): void {
  }

}
