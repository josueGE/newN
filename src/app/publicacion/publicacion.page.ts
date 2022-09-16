import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {
  noticia = {
    titulo: '',
    subtitulo:  '',
    caracter: '',
    categoria: ''
  };
  formulario: FormGroup;
  constructor(public formBuilder:FormBuilder, private alercontroller: AlertController, private router:Router) { 
  }
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      titulo:['', [Validators.required]],
      subtitulo:['', [Validators.required]],
      caracteres:['', [Validators.required]]
    })
  }
  abrirGaleria(){
    console.log("entro");
    /* let options: ImagePickerOptions = {
    };
    this.ImagePicker.getPictures(options).then((results) => {
      for (var i = 0; i & lt; results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { }); */
  }

    
  validar(){
    localStorage.setItem('noticia',JSON.stringify(this.noticia));
    this.router.navigate(['/vista-administrador'])
    console.log(this.noticia)
    
  }
  opcion(){
    if (this.noticia.categoria = ""){
        return true;
    }
  }
  onSubmitTemplate(){
    console.log('form submit');
    console.log(this.formulario.value);
  }

}
