import { Component } from '@angular/core';

@Component({
    selector: 'headerLogin',
    templateUrl: './headerLogin.component.html',
    styleUrls: ['./headerLogin.component.css'],
})
export class HeaderLogin {
    public sansAccount: string = "Don't have an account?";
    public requestAccount: string = 'Request Access';
}
