import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../admin/components/animation';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  animations: [fadeIn]
})

export class KeepersComponent implements OnInit {
  title = 'Keepers';

  constructor() { }

  ngOnInit() {
    console.log('Componente Keepers cargado');
  }

}
