import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-kahvila',
  templateUrl: './kahvila.component.html',
  styleUrls: ['./kahvila.component.css']
})
export class KahvilaComponent {
  uusipoydanNumero = '';
  uusimyyntiMaara = '';
  @Output() myyntiTapahtuma = new EventEmitter<{poydanNumero: string, myyntiMaara: string}>();
  @Output() tarjoiluTapahtuma = new EventEmitter<{poydanNumero: string, myyntiMaara: string}>();

  kahviaMyyty() {
    this.myyntiTapahtuma.emit({
      poydanNumero: this.uusipoydanNumero,
      myyntiMaara: this.uusimyyntiMaara
    });
  }

  kahviaTarjoiltu() {
    this.tarjoiluTapahtuma.emit({
      poydanNumero: this.uusipoydanNumero,
      myyntiMaara: this.uusimyyntiMaara
    });
  }

}
