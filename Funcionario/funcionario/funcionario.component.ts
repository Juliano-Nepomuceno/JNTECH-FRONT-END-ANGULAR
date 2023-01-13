import { NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {


  public select: any;
  constructor() { }


  eventoSelect(){}

  ngOnInit(): void {
  }

}
