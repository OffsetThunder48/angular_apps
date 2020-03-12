import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './LoginComponent/app.login.component';
import { RegistrationComponent } from './RegistrationComponent/app.registration.component';

const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'register', component: RegistrationComponent, pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
