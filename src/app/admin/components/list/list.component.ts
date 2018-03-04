import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './list.component.html'
})

export class ListComponent {
  title = 'Listar';
  numbers = new Array(7);
}
