import { Routes } from '@angular/router';
import { LoginComponent } from './login.component/login.compnent';
import { TermsComponent } from './terms.compnent/terms.compnent';
import { SignupComponent } from './signup.component/signup.compnent';
import { MobileOTPVerificationComponent } from './mobile.otp.verfication/mobile.otp.verifcation.compnent';
import { MobileForgetPasswordComponent } from './mobile.forgetpassword/mobile.forgetpassword';
import { NewPasswordComponent } from './newpassword.compnent/newpassword.component';
import { LogdinComponent } from './logedin.component/logedin.component';


export const AuthRoutes: Routes = [
{component:LoginComponent,path:"login"},
{component:TermsComponent,path:'terms'}
,{component:SignupComponent,path:'signup'}
,{component:MobileOTPVerificationComponent,path:'mobileotp'}
,{component:MobileForgetPasswordComponent,path:'mobileforgetpassword'}
,{component:NewPasswordComponent,path:'newpassword'}
,{component:LogdinComponent,path:'logedin'}



];

