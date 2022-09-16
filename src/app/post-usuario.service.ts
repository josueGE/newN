import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostUsuarioService {

  constructor( public http: HttpClient) { }
  getPosts(){
    return new Promise(resolve=>{
      this.http.get('').subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
}  
