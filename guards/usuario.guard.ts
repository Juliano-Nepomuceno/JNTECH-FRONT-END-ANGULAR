import { LogarComponent } from './../logar/logar/logar.component';
import { LogarService } from './../logar/logar.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})




export class UsuarioGuard implements CanActivate, OnInit {

  
  
  //public listausuariosarray = {Nome:'juliano', Senha:'juliano'};
  public resultado: any ;


  constructor(private logar: LogarService, private rota: Router){

  }

 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
    Promise<boolean | UrlTree> | boolean | UrlTree {
         
//return true
     // console.log(this.listausuariosarray);
  if (this.logar.resultadoLogar)
  {
   
   // console.log(this.resultado)  
    return true;
  }
    else 
    {
      
      this.rota.navigate(['login']);
      return false;
  }
  }
  ngOnInit(): void {
    
  }
}

  
  
 
  
  
    
    
    
//return this.resultado
  
  
