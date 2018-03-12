import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { tick } from '@angular/core/testing';

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

    getAnimal(id) {
        return this._http.get(this.url + 'animal/' + id).map(res => res.json());
    }

    getAnimals() {
        return this._http.get(this.url + 'animals/').map(res => res.json());
    }

    editAnimal(token, id, animal) {
        const params = JSON.stringify(animal);
        const headers = new Headers ({
            'Authorization': token,
            'Content-type': 'application/json'
        });

        return this._http.put(this.url + 'animal/' + id, params, {headers: headers}).map(res => res.json());
    }

    deleteAnimal(token, id) {
        const headers = new Headers ({
            'Authorization': token,
            'Content-type': 'application/json'
        });
        const options = new RequestOptions({headers: headers});

        return this._http.delete(this.url + 'animal/' + id, options).map(res => res.json());
    }
}
