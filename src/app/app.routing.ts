import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { DashboardComponent } from './dashboard/index';
import { LoginComponent } from './login/index';
import { ForgotPasswordComponent } from './login/forgotPassword/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
