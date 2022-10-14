import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {LoginI} from '../modelos/login.interface';
import {ResponseI} from '../modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class PostUsuarioService {
  validar = 'http://127.0.0.1:8000/api/Validar';
  constructor( public http: HttpClient) { }
  MostrarEmail(){
    return new Promise(resolve=>{
      this.http.get('http://127.0.0.1:8000/api/email').subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
  entrar(form:LoginI):Observable<ResponseI>{
    return this.http.post<ResponseI>('http://127.0.0.1:8000/api/login',form);
  }
}  
