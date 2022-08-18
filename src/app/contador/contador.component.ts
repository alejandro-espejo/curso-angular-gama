import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Input() value = 0;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.value++;
    this.valueChange.emit(this.value);
  }

  decrement() {
    this.value--;
    this.valueChange.emit(this.value);
  }
}
