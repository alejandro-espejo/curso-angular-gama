import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  fruitlist = [
    'Apple',
    'Orange',
    'Papaya',
    'Pear'
  ];

  carslist = [
    {
      board: 'JND-7438',
      color: 'Black'
    },
    {
      board: 'JND-1111',
      color: 'Blue'
    },
    {
      board: 'FGV-7438',
      color: 'White'
    },
    {
      board: 'ASD-8776',
      color: 'Red'
    }
  ];

  mustDisplay = false;

  changeValue() {
    this.mustDisplay = !this.mustDisplay;
  }

  sum(n1: number, n2: number) {
    return n1 + n2;
  }
}
