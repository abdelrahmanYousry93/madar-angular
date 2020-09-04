
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainDashboardRoutes } from './maindashboard.routing';
import {DropdownModule, ChartModule,ToastModule} from 'primeng';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboards/dashboard.compnent/dashboard.compnent';
@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(MainDashboardRoutes),DropdownModule,ChartModule 
  ],
  declarations: [DashboardComponent]
})
export class MainDashboardModule {}
