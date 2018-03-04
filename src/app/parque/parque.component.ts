import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parque',
  templateUrl: './parque.component.html',
  styleUrls: ['./parque.component.css']
})

export class ParqueComponent {
  @Input() nombre: string;
  @Input() metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parques reunidos Geyper';
    this.metros = 1500;
    this.vegetacion = 'Espesa';
    this.abierto = false;
  }

  emitirEvento() {
    this.pasameLosDatos.emit({
      'nombre' : this.nombre,
      'metros' : this.metros,
      'vegetacion' : this.vegetacion,
      'abierto' : this.abierto
    });
  }
}
