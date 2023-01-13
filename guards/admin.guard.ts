import { LogarService } from './../logar/logar.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivateChild {

constructor(private logar: LogarService){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       console.log(childRoute)
if(this.logar.Admin)
{
return true  
}
      if(state.url.includes('atualizar') || (state.url.includes('deletar') )  ){
alert( 'sem autorizacao, Somente com usuario admin')
return false
      }
      else
      return true;
    
     
}
}
