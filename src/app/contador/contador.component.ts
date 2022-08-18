import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Output() clicked = new EventEmitter();
  @Input() value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.value++;
    this.clicked.emit('Incremento. Valor atual: ' + this.value);
  }

  decrement() {
    this.value--;
    this.clicked.emit('Decremento. Valor atual: ' + this.value);
  }
}
