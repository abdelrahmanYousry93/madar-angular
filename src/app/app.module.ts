import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuhtLayoutComponent } from './layouts/auht-layout/auht-layout.component';
import { AuthFooterComponent } from './layouts/auht-layout/auth.footer/auth.footer';
import { AuthHeaderComponent } from './layouts/auht-layout/auth.header/auth.header';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,AuhtLayoutComponent,AuthFooterComponent,AuthHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
                   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
