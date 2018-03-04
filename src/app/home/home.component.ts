import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../admin/components/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  title = 'Home';

  constructor() { }

  ngOnInit() {
    console.log('home.component cargado');
  }

}
