import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pudim = 'uma palavra';
  favoriteColor = 'green';
  title = 'Seja bem vindo!';
 
  constructor() {
    
  }

  eventoRecebido($event: any) {
    console.log('AppComponent: EVENTO RECEBIDO', $event);
    console.log('Fui clicado');
  }
}
