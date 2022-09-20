import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.interface';
import { Persona } from '../../models/Persona.interface';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss'],
})
export class PipesExamplesComponent implements OnInit {
  dob: Date = new Date(1994, 10, 27);
  name: string = 'ivan';
  PI: number = 3.1415926535897;
  price: number = 20.566;
  persona: Persona = {
    id: 0,
    name: 'julian',
    lastname: 'perez',
    email: 'julianPerez@gmail.com',
  };
  cantidad: number = 30;
  textoLargo: string =
    'ñsalñj ñakfjñaldsfjañd ñajdfñladjf ñladjldfjladjsf ñaljdñlasjdflkfj ';
  //creamos unos jugadores para ejemplos de pipe de calculos
  player1: Player = {
    name: 'Jose',
    points: [10, 20, 30, 0],
  };
  player2: Player = {
    name: 'Pepe',
    points: [12, 25, 10, 0],
  };

  constructor() {}

  ngOnInit(): void {}
}
