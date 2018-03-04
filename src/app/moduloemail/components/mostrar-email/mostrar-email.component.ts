import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  template: `
  <span *ngIf="emailContacto">
    <h4>{{title}}</h4>
    <strong>Email de contacto:</strong> {{emailContacto}}
    <button (click)="borrarEmail()">Eliminar email de contacto</button>
  </span>
  `
})

export class MostrarEmailComponent implements OnInit, DoCheck {
  title = 'Mostrar email';
  emailContacto: string;

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}
