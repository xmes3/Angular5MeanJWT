import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { UploadService } from '../services/upload.service';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    providers: [UserService, UploadService]
})

export class UserEditComponent implements OnInit {
    public title: String;
    public user: User;
    public identity;
    public token;
    public status;
    public filesToUpload: Array<File>;
    public url: String;

    constructor(
        private _userService: UserService,
        private _uploadService: UploadService
    ) {
        this.title = 'Actualizar mis datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log('componente user-edit cargado');
    }

    onSubmit() {
        this._userService.updateUser(this.user).subscribe(
            response => {
                if (response.user) {
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    this.status = 'success';

                    // subir imagen
                    this._uploadService.makeFileRequest(
                            this.url + 'upload-image-user/' + this.identity._id,
                            [],
                            this.filesToUpload,
                            this.token,
                            'image')
                        .then((result: any) => {
                            this.user.image = result.user.image;
                            localStorage.setItem('identity', JSON.stringify(this.user));
                        });
                } else {
                    this.status = 'error';
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

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }
}
