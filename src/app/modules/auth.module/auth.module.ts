
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login.component/login.compnent';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes)
  ],
  declarations: [LoginComponent]
})
export class AuthModule {}
