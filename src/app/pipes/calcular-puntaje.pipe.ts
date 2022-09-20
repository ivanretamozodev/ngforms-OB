import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/player.interface';

@Pipe({
  name: 'calcularPuntaje',
})
export class CalcularPuntajePipe implements PipeTransform {
  transform(player: Player, ...args: unknown[]): string {
    let puntuacionTotal: number = 0;
    player.points.forEach((puntuacion) => {
      puntuacionTotal += puntuacion;
    });
    return `Jugador ${player.name} ah conseguido ${puntuacionTotal} puntos!`;
  }
}
