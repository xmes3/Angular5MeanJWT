import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { UserService } from '../../../services/user.service';
import { AnimalService } from '../../../services/animal.service';
import { UploadService } from '../../../services/upload.service';
import { fadeLateral } from '../../animation';

@Component({
  selector: 'app-admin-edit',
  templateUrl: '../add/add.component.html',
  providers: [UserService, AnimalService, UploadService],
  animations: [fadeLateral]
})

export class EditComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public filesToUpload: Array<File>;
  public status;
  public isEdit;
  public animalId;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.title = 'Editar';
    this.isEdit = true;
    this.animal = new Animal('', '', '', 2018, '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.getAnimal();
  }

  onSubmit() {
    this._animalService.editAnimal(this.token, this.animalId, this.animal).subscribe(
      response => {
        if (!response.animal) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animal;

          // subir imagen
          if (!this.filesToUpload) {
            this._router.navigate(['/animal', this.animalId]);
          } else {
            this._uploadService.makeFileRequest(
              this.url + 'upload-image-animal/' + response.animal._id,
              [],
              this.filesToUpload,
              this.token,
              'image')
              .then((result: any) => {
                this.animal.image = result.image;
                this._router.navigate(['/animal', this.animalId]);
              });
          }
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

  getAnimal() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];
      this._animalService.getAnimal(id).subscribe(
        response => {
          if (!response.animal) {
            this._router.navigate(['/']);
          } else {
            this.animal = response.animal;
            this.animalId = response.animal._id;
          }
        },
        error => {
          this._router.navigate(['/']);
          console.log(<any>error);
        }
      );
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
