import { Component } from '@angular/core';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    public heading1: string = 'Sign in to GL Inventory';
    public heading2: string = 'Enter your details below';
    public email: string = 'Email address';
    public password: string = 'Password';
    public forgotPassword: string = 'Forgot password?';
    public keepLogged: string = 'Keep me logged in';
    public login: string = 'Log in';
}
