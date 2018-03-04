import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../admin/components/animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn]
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  emailContacto: string;

  constructor() { }

  ngOnInit() {
    console.log('Componente contact cargado');
  }

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
    localStorage.getItem('emailContacto');
  }
}
