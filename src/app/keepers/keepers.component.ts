import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../admin/components/animation';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  providers: [UserService],
  animations: [fadeIn]
})

export class KeepersComponent implements OnInit {
  public title: string;
  public keepers: User[];
  public url: string;

  constructor(
    private _userService: UserService
  ) {
    this.title = 'Cuidadores';
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('Componente cuidadores cargado');
    this.getKeepers();
  }

  getKeepers() {
    this._userService.getKeepers().subscribe(
      response => {
        if (!response.users) {
          console.log('no se han encontrado cuidadores');
        } else {
          this.keepers = response.users;
          console.log(this.keepers);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
