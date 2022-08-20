import { Component, OnInit } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

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

  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;


  changeValue() {
    this.mustDisplay = !this.mustDisplay;
  }

  sum(n1: number, n2: number) {
    return n1 + n2;
  }
}
