import { Component } from '@angular/core';

import { User } from '../../_models/index';

@Component({
  selector: 'headerMain',
  templateUrl: './headerMain.component.html',
  styleUrls: ['./headerMain.component.css'],
})
export class HeaderMainComponent {
  currentUser: User;
  public logout: string = 'Log out';

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
