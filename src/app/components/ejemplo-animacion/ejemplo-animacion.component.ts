import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.scss'],
  //metadatos para la animacion del componente
  animations: [
    trigger('animaciones', [
      state(
        'active',
        style({
          transform: 'translate(10px,20px)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'translate(0px,0px)',
        })
      ),
      state(
        'sube',
        style({
          transform: 'translateY(10px)',
        })
      ),
      state(
        'rotar',
        style({
          transform: 'rotate(90deg)',
        })
      ),
      state(
        'ampliar',
        style({
          transform: 'scale(2.2)',
          backgroundColor: 'green',
        })
      ),
      state(
        'original',
        style({
          transform: 'scale(1.1)',
        })
      ),
      transition('active => rotar', animate('1500ms ease-in')),
      transition('rotar => active', animate('1500ms ease-out')),
      transition('active => sube', animate('1500ms ease-in')),
      transition('sube => active', animate('1500ms ease-out')),
      transition('inactive => rotar', animate('1500ms ease-in')),
      transition('rotar => inactive', animate('1500ms ease-out')),
      transition('inactive => sube', animate('1500ms ease-in')),
      transition('sube => inactive', animate('1500ms ease-out')),
      transition('sube => rotar', animate('1500ms ease-in')),
      transition('rotar => sube', animate('1500ms ease-out')),

      //primer animavcion basica
      transition('active => inactive', animate('1500ms ease-in')),
      transition('inactive => active', animate('1500ms ease-out')),
    ]),
  ],
})
export class EjemploAnimacionComponent implements OnInit {
  state: string = 'inactive';

  constructor() {}

  ngOnInit(): void {}

  cambiarEstadoActivado() {
    if (this.state === 'active') {
      this.state = 'inactive';
    } else {
      this.state = 'active';
    }
  }

  cambiarTamanioActivado() {
    if (this.state === 'ampliar') {
      this.state = 'original';
    } else {
      this.state = 'ampliar';
    }
  }

  subir() {
    this.state = 'sube';
  }
  rotar() {
    this.state = 'rotar';
  }
}
