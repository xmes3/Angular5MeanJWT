import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-email',
  template: `
  <div class="panel panel-default">
    <h2>{{title}}</h2>
    <hr/>
    <app-mostrar-email></app-mostrar-email>
    <app-guardar-email></app-guardar-email>
  </div>
  `
})

export class MainEmailComponent {
  title = 'Módulo de email';
}
