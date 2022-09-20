import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.interface';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss'],
})
export class PipesExamplesComponent implements OnInit {
  dob: Date = new Date(1994, 10, 27);
  name: string = 'ivan';
  PI: number = 3.1415926535897;
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
