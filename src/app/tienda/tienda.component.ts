import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { trigger, state, style, transition, animate } from '@angular/core';
import { fadeIn } from '../admin/components/animation';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('inactive', style ({
        border: '5px solid #ccc'
      })),
      state('active', style ({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: ('scale(1.5)')
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('1s linear'))
    ]),
    fadeIn
  ]
})

export class TiendaComponent implements OnInit {
  public titulo = 'Tienda';
  public nombreDelParque: string;
  public miParque;
  public status = 'inactive';

  constructor() {
      this.titulo = 'Web de la tienda';
  }

  mostrarNombre() {
      console.log(this.nombreDelParque);
  }

  verDatosParque(event) {
    console.log(event);
    this.miParque = event;
  }

  ngOnInit() {
    $(document).ready(function() {
      $('#texto-jq').hide();
      $('#btn-jq').click(function () {
        $('#texto-jq').show();
      });
    });
  }

  cambiarEstado(status) {
    if (status === 'inactive') {
      this.status = 'active';
    } else {
      this.status = 'inactive';
    }
  }
}
