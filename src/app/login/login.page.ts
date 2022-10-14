import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { PostUsuarioService } from '../servicio/post-usuario.service';

import {Router} from '@angular/router';

import { LoginI } from '../modelos/login.interface';
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mensaje:boolean;
  public email: any;
  usuario: any = {};
  loginForm = new FormGroup({
    
    password : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required ),
  });
  
  constructor( public prueba: PostUsuarioService, private ruta:Router ){ }
  
  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.prueba.MostrarEmail()
    .then(data => {
      this.email = data;
      console.log(this.email)
      console.log(this.usuario)
    }); 
  }
  Validar(form : LoginI) {
    this.prueba.entrar(form).subscribe(data => {
      console.log(data);
      if (data){
        this.ruta.navigate(['/inicio'])
      }
      else {
        console.log("no entro");
      }
    })    
 }
 login(form){
    console.log(form.value);
 } 

  
  ngOnInit() {
    
  }

}
