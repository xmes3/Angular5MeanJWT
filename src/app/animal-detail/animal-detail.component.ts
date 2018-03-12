import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../services/global';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService]
})

export class AnimalDetailComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
  ) {
    this.title = 'Listado de animales';
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('componente animal-detail cargado');
    this.getAnimal();
  }

  getAnimal() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];
      this._animalService.getAnimal(id).subscribe(
        response => {
          if (!response.animal) {
            this._router.navigate(['/']);
          } else {
            this.animal = response.animal;
          }
        },
        error => {
          this._router.navigate(['/']);
          console.log(<any>error);
        }
      );
    });
  }
}
