import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../admin/components/animation';

@Component({
  selector: 'app-animal',
  templateUrl: './animals.component.html',
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  title = 'Animals';

  constructor() { }

  ngOnInit() {
    console.log('Componente Animals cargado');
  }
}
