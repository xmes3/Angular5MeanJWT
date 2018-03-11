import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { UserService } from '../../../services/user.service';
import { AnimalService } from '../../../services/animal.service';
import { UploadService } from '../../../services/upload.service';


@Component({
  selector: 'app-admin-add',
  templateUrl: './add.component.html',
  providers: [UserService, AnimalService, UploadService]
})

export class AddComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public status;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.title = 'Añadir';
    this.animal = new Animal('', '', '', 2018, '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('componente animal-add cargado.');
  }

  onSubmit() {
    console.log(this.animal);
    this._animalService.addAnimal(this.token, this.animal).subscribe(
      response => {
        if (!response.animal) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animal;

          // subir imagen

          this._router.navigate(['/admin-panel/list']);
        }
      },
      error => {
        const errorMessage = <any>error;
        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  }
}
