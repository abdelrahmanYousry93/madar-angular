import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuhtLayoutComponent } from './layouts/auht-layout/auht-layout.component';
import { AuthFooterComponent } from './layouts/auht-layout/auth.footer/auth.footer';
import { AuthHeaderComponent } from './layouts/auht-layout/auth.header/auth.header';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { CompanyLocationFooterComponent } from './layouts/companylocation-layout/companylocation-footer/companylocation.footer';
import { CompanyLocationHeaderComponent } from './layouts/companylocation-layout/companylocation-header/companylocation.header';
import { CompanyLocationLayoutComponent } from './layouts/companylocation-layout/companylocation-layout.component';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule, InputTextModule, DialogModule } from 'primeng';
import { FormsModule } from '@angular/forms';
import { CompanyLocationSideComponent } from './layouts/companylocation-layout/companylocation.side/companylocation.side';
import { MainDashboardHeaderLayoutComponent } from './layouts/maindashboard-layout/maindashboard-layout-header/maindashboard-layout-header.compnent';
import { MainDashboardSideLayoutComponent } from './layouts/maindashboard-layout/maindashboard-layout-side/maindashboard-layout-side.compnent';
import { MainDashboardLayoutComponent } from './layouts/maindashboard-layout/maindashboard-layout.compnent';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,AuhtLayoutComponent,
    AuthFooterComponent,AuthHeaderComponent,
    CompanyLocationHeaderComponent
    ,CompanyLocationFooterComponent,
    CompanyLocationLayoutComponent
    ,CompanyLocationSideComponent,
    MainDashboardHeaderLayoutComponent
    ,MainDashboardSideLayoutComponent,
    MainDashboardLayoutComponent


  ],

  
  imports: [
    BrowserModule,BrowserAnimationsModule,NoopAnimationsModule,
    RouterModule.forRoot(AppRoutes),DropdownModule,InputTextModule,
    NgCircleProgressModule.forRoot({
      "radius": 51,
      "space": -5,
      "toFixed": 0,
      "maxPercent": 100,
      "outerStrokeWidth": 5,
      "innerStrokeColor": "#ededed",
      "innerStrokeWidth": 5,
      "showSubtitle": false,
      "showBackground": false
    })
                   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
