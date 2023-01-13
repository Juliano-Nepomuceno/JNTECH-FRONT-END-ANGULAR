import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro-geral',
  templateUrl: './erro-geral.component.html',
  styleUrls: ['./erro-geral.component.css']
})
export class ErroGeralComponent implements OnInit {
public erro: string;
  constructor(private rotaativa: ActivatedRoute) { 

    this.rotaativa.params.subscribe(valor => this.preencherCampos(valor['erro']))
  }


preencherCampos(erro){

this.erro = erro


}

  ngOnInit(): void {
  }

}
