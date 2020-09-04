
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login.component/login.compnent';
import { TermsComponent } from './terms.compnent/terms.compnent';
import { SignupComponent } from './signup.component/signup.compnent';
import { MobileOTPVerificationComponent } from './mobile.otp.verfication/mobile.otp.verifcation.compnent';
import { MobileForgetPasswordComponent } from './mobile.forgetpassword/mobile.forgetpassword';
import { NewPasswordComponent } from './newpassword.compnent/newpassword.component';
import { LogdinComponent } from './logedin.component/logedin.component';
import {DropdownModule} from 'primeng';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(AuthRoutes),DropdownModule
  ],
  declarations: [LoginComponent
    ,TermsComponent,SignupComponent,
    MobileOTPVerificationComponent,
    MobileForgetPasswordComponent,NewPasswordComponent,LogdinComponent]
})
export class AuthModule {}
