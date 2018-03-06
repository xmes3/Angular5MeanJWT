import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    public title: String;
    public user: User;
    public identity;
    public token;
    public status;
    public errorMessage;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Login';
        this.user = new User('', '', '', '', '', 'ROLE_USER', '');
    }

    ngOnInit() {
        console.log('Login component cargado');
        console.log(this._userService.getIdentity());
        console.log(this._userService.getToken());
    }

    onSubmit() {
        let errorMessage = '';

        // logear al usuario
        this._userService.signUp(this.user).subscribe(
            response => {
                this.identity = response.user;
                if (!this.identity || !this.identity._id) {
                    console.log('el usuario no se ha logeado correctamente');
                } else {
                    this.identity.password = '';
                    localStorage.setItem('identity', JSON.stringify(this.identity));
                    console.log(this.identity);
                    // conseguir el token
                    this._userService.signUp(this.user, true).subscribe(
                        res => {
                            this.token = res.token;
                            if (this.token.length <= 0) {
                                console.log('el tokrn no se ha generado');
                            } else {
                                this.status = 'success';
                                localStorage.setItem('token', this.token);
                                this._router.navigate(['/']);
                            }
                        },
                        err => {
                            errorMessage = <any>err;
                            if (errorMessage != null) {
                                this.status = 'error';
                            }
                        }
                    );
                }
            },
            err => {
                errorMessage = <any>err;
                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        );
    }
}
