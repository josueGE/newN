import { Component, OnInit } from '@angular/core';
import { PostUsuarioService } from '../servicio/post-usuario.service';


import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public api: PostUsuarioService) { }

  ngOnInit() {
  }

}
