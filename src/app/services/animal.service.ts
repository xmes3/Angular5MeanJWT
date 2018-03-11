import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()

export class AnimalService {
    public url: String;

    constructor(
        private _http: Http
    ) {
        this.url = GLOBAL.url;
    }

    addAnimal(token, animal) {
        const params = JSON.stringify(animal);
        const headers = new Headers({
            'Content-type': 'application/json',
            'Authorization': token
        });

        return this._http.post(this.url + 'animal/', params, {headers: headers}).map(res => res.json());
    }
}
