import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: string = "";
  @Input() color: string = "";
  @Output() clicado = new EventEmitter(); // 


  imageURL = "https://bloguinhodanana.files.wordpress.com/2011/01/filhotes-gato.jpg";
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = "Um outro texto qualquer a ser lido pelo leitor de tela";
  initialCounter = 10;

  valorDoInput = '';

  constructor() {
    setTimeout(() => {
      console.log('isDisabled: ', this.isDisabled);
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit(): void {
  }

  getImageURL() {
    return this.imageURL;
  }

  onClick($event: any) {
    console.log('clicou!', $event);
  }

  digitouAlgo($event: any) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse() {
    console.log('alguem passou o mouse');
  }

  onCLickBotaoEmissor($event: any) {
    console.log('Devo emitir informações para o componente pai')
    // IRÁ EMITIR O EVENTO PARA O COMPONENTE PAI
    this.clicado.emit(true);
  }

  updatedCounter($event: any) {
    console.log('Efetuado um processamento de ', $event)
  }
}
