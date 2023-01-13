import { Clservico } from './clservico';
import { Servicos } from './servicos';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, take, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppModule } from '../app.module';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoscrudService {

  

private url : string =  'http://localhost:3000/ServicosTI';


private servicosrecebido: Clservico[];




//private listateste: any[] = [{id: '20', Nome: 'Te amo Deus muito obtigado'}];
//private listajsonn = JSON.stringify(this.listateste);

constructor(private httpcli: HttpClient) { 

 
}



listarservicos() {
return this.httpcli.get(this.url);
}

listarservicosid(id)
  {

   //return this.httpcli.get(`${this.url}/${this.id}`)
   return this.httpcli.get<Clservico>(`${this.url}/${id}`)
   .pipe(tap(valor => console.log(valor)))
   
   
   
  }


salvar(salve){
  
  
   
  return this.httpcli.post(this.url, salve)
  
}

EditService(id, objeto){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
       Authorization: 'my-auth-token'
     })
    };

    console.log(id, objeto)
  return this.httpcli.put(this.url+'/'+id,  objeto, httpOptions)
}



delete(id){

  return this.httpcli.delete(`${this.url}/${id}`)
}

}



