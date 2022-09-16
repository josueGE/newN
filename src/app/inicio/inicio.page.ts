import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  estado_blanco: boolean=true;
  estado_color:boolean;
  comentario: boolean;
  arrayNoticias: Noticias[] =[
    {
      imagen: 'https://www.educacionadventista.com/wp-content/uploads/2017/08/Colecamp-PORTADA-1.jpg',
      subtitulo:'Empieza el cole camp',
      titulo: 'COLE CAMP',
      contenido:'!!ESPECTACULARMENTE EXTRAODINARIO ES IMPRESIONARTE LO QUE SUCEDERA DENTRO DE LAS INTALACIONES DE LA UAB TE LO PERDERAS',
      reaccion: this.estado_blanco
    },
    {
      imagen: 'https://www.uab.edu.bo/wp-content/uploads/2022/08/CAB-PLURIS.jpeg',
      subtitulo:'Cochabamba (UAB)',
      titulo: 'CAB SIGUE LIDERANDO LAS DISCIPLINAS DE FÚTBOL Y VÓLEY Vinto, Cochabamba (UAB)',
      contenido:"En la segunda jornada de los partidos de volley damas y varones y fútbol varones el Colegio Adventista de Bolivia continúa liderando la tabla de posiciones al superar con éxito los partidos de esta mañana. En vóley el representativo femenino del CAB derrotó al Colegio Sagrada Familia",
      reaccion: this.estado_blanco
    }
  ];
  constructor() {}
   contador=0
  ngOnInit() {
  }
  onClickFuntion($event){
    
    if(this.contador%2==0){
      console.log("color");
      this.estado_color=true;
      this.estado_blanco=false;
    }
    else{
      console.log("blanco")
      this.contador=this.contador-2
      this.estado_blanco=true;
      this.estado_color=false;
    }
    this.contador=this.contador+1

  }
  onClickComentario($event){
    if(this.contador%2==0){
      console.log("color");
      this.comentario=true;
    }
    else{
      console.log("blanco")
      this.contador=this.contador-2
      this.comentario=false;
    }
    this.contador=this.contador+1    

  }
  administrador(){
    return true;
  }
}
interface Noticias{
  imagen: string;
  subtitulo: string;
  titulo: string;
  contenido: string;
  reaccion: boolean;
}

