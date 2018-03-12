import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { fadeLateral } from '../../animation';

@Component({
  selector: 'app-admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService, UserService],
  animations: [fadeLateral]
})

export class ListComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  public token;
  public busqueda;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
    private _userService: UserService
  ) {
    this.title = 'Listado de animales';
    this.token = _userService.getToken();
  }

  ngOnInit() {
    this.getAnimals();
  }

  deleteAnimal(id) {
    this._animalService.deleteAnimal(this.token, id).subscribe(
      response => {
        if (!response.animal) {
          alert('error en el servidor');
        }
        this.getAnimals();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getAnimals() {
    this._animalService.getAnimals().subscribe(
      response => {
        if (!response.animals) {

        } else {
          this.animals = response.animals;
          console.log(this.animals);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
