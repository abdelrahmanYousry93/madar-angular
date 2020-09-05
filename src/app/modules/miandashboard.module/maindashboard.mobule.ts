
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainDashboardRoutes } from './maindashboard.routing';
import {DropdownModule, ChartModule,ToastModule, DialogModule} from 'primeng';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboards/dashboard.compnent/dashboard.compnent';
import { DashboardSearchComponent } from './dashboards/dashboard-search.compnent/dashboard-search.compnent';
import { ShipmentListComponent } from './shipmentlists/shipmentlist.compnent/shipmentlist.compnent';
import {SidebarModule} from 'primeng/sidebar';
import { ShipmentListNoResaultComponent } from './shipmentlists/shipmentlist-noresault/shipmentlist-noresault.compnent';
import {PaginatorModule} from 'primeng/paginator';
import { CompanySettingsComponent } from './manages/company-settings/company-settings.component';
import { CompanySettingsEditComponent } from './manages/company-settings-edit/company-settings-edit.component';
import { RecieversListComponent } from './manages/recievers-list/recievers-list.component';
import { AddNewRecieverStep1Component } from './manages/add-new-reciever-step1/add-new-reciever-step1.component';
import { AddNewRecieverStep2Component } from './manages/add-new-reciever-step2/add-new-reciever-step2.component';
import { UsersEmptyComponent } from './manages/users-empty/users-empty.component';
import { UsersListComponent } from './manages/users-list/users-list.component';
import { AddNewUserComponent } from './manages/add-new-user/add-new-user.component';
import { NotificationSettingsComponent } from './manages/notification-settings/notification-settings.component';
import { NotificationSettingsEditComponent } from './manages/notification-settings-edit/notification-settings-edit.component';
import { ShipmentDetailsComponent } from './shipmentlists/shipment-details.compnent/shipment-details.compnent';
import { AllFleetsComponent } from './fleetproviders/allfleetproviders.compnent/allfleetproviders.compnent';
import { FleetProvidersContractComponent } from './fleetproviders/fleetproviders-contract.compnent/fleetproviders-contract.compnent';
import { CreateShipmentComponent } from './shipmentlists/single-shipments/createshipment.compnent/createshipment.compnent';
import { CreateSingleShipmentComponent } from './shipmentlists/single-shipments/create-single-shipment.compnent/create-single-shipment.compnent';
import { SharedStepperCompnent } from './shipmentlists/single-shipments/shared-shipment-stepper.compnent/shared-shipment-stepper.compnent';
import { CreateSingleShipmentInformationComponent } from './shipmentlists/single-shipments/create-single-shipment-information.compnent/create-single-shipment-information.compnent';
import { CreateSingleShipmentPackageComponent } from './shipmentlists/single-shipments/create-single-shipment-package.compnent/create-single-shipment-package.compnent';
import { CreateSingleShipmentReciverComponent } from './shipmentlists/single-shipments/create-reciver-shipment.compnent/create-reciver-shipment.compnent';
import { CreateSingleShipmenAddReciverComponent } from './shipmentlists/single-shipments/create-reciver-shipment-add.compnent/create-reciver-shipment-add.compnent';
import { CreateSingleContractFleetComponent } from './shipmentlists/single-shipments/create-single-contract-fleet.compnent/create-single-contract-fleet.compnent';
import { CreateSingleAdddContractFleetComponent } from './shipmentlists/single-shipments/create-single-add-fleet-contract.compnent/create-single-add-fleet-contract.compnent';
import { CreateSingleCongratuolationComponent } from './shipmentlists/single-shipments/create-single-congratiolation.compnent/create-single-congratiolation.compnent';
import { CreateSingleShipmentSummeryComponent } from './shipmentlists/single-shipments/create-single-summery.compnent/create-single-summery.compnent';
import { NgCircleProgressModule } from 'ng-circle-progress';



import { CreateBulkShipmentComponent } from './create-bulk-shipment/create-bulk-shipment/create-bulk-shipment.component';
import { CreateBulkShipmentUploadComponent } from './create-bulk-shipment/create-bulk-shipment-upload/create-bulk-shipment-upload.component';
import { CreateBulkShipmentListComponent } from './create-bulk-shipment/create-bulk-shipment-list/create-bulk-shipment-list.component';
import { CreateBulkShipmentDetailsComponent } from './create-bulk-shipment/create-bulk-shipment-details/create-bulk-shipment-details.component';

import { CreateMultipleShipmentComponent } from './create-multiple-shipment/create-multiple-shipment/create-multiple-shipment.component';
import { CreateMultipleShipmentStep1BasicInfoComponent } from './create-multiple-shipment/create-multiple-shipment-step1-basic-info/create-multiple-shipment-step1-basic-info.component';
import { CreateMultipleShipmentStep1BasicInfoEmptyComponent } from './create-multiple-shipment/create-multiple-shipment-step1-basic-info-empty/create-multiple-shipment-step1-basic-info-empty.component';
import { CreateMultipleShipmentStep2ShipmentInfoComponent } from './create-multiple-shipment/create-multiple-shipment-step2-shipment-info/create-multiple-shipment-step2-shipment-info.component';
import { CreateMultipleShipmentStep2ShipmentInfoLocationComponent } from './create-multiple-shipment/create-multiple-shipment-step2-shipment-info-location/create-multiple-shipment-step2-shipment-info-location.component';
import { CreateMultipleShipmentStep3ChooseFleetComponent } from './create-multiple-shipment/create-multiple-shipment-step3-choose-fleet/create-multiple-shipment-step3-choose-fleet.component';
import { CreateMultipleShipmentStep3ChooseFleetEmptyComponent } from './create-multiple-shipment/create-multiple-shipment-step3-choose-fleet-empty/create-multiple-shipment-step3-choose-fleet-empty.component';
import { CreateMultipleShipmentSuccessComponent } from './create-multiple-shipment/create-multiple-shipment-success/create-multiple-shipment-success.component';
import { CreateMultipleShipmentDetailsWaitingComponent } from './create-multiple-shipment/create-multiple-shipment-details-waiting/create-multiple-shipment-details-waiting.component';
import { CreateMultipleShipmentDetailsRunningComponent } from './create-multiple-shipment/create-multiple-shipment-details-running/create-multiple-shipment-details-running.component';
import { SharedStepperMultiCompnent } from './create-multiple-shipment/multi-shared-stepper.compnent/multi-shared-stepper.compnent';


@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(MainDashboardRoutes),DropdownModule,
    ChartModule,SidebarModule,PaginatorModule,DialogModule,
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
  declarations: [DashboardComponent,DashboardSearchComponent,
    ShipmentListComponent,ShipmentListNoResaultComponent,
    CompanySettingsComponent,
    CompanySettingsEditComponent,
    RecieversListComponent,
    AddNewRecieverStep1Component,
    AddNewRecieverStep2Component,
    UsersEmptyComponent,
    UsersListComponent,
    AddNewUserComponent,
    NotificationSettingsComponent, 
    NotificationSettingsEditComponent,
    ShipmentDetailsComponent,
    FleetProvidersContractComponent,
    AllFleetsComponent,
    CreateShipmentComponent,
    CreateSingleShipmentComponent,
    SharedStepperCompnent,
    CreateSingleShipmentInformationComponent,
    CreateSingleShipmentPackageComponent,
    CreateSingleShipmentReciverComponent,
    CreateSingleShipmenAddReciverComponent,
    CreateSingleContractFleetComponent,
    CreateSingleAdddContractFleetComponent,
    CreateSingleCongratuolationComponent,
    CreateSingleShipmentSummeryComponent,
    CreateBulkShipmentComponent,
    CreateBulkShipmentUploadComponent,
    CreateBulkShipmentListComponent,
    CreateBulkShipmentDetailsComponent,

    CreateMultipleShipmentComponent,
    CreateMultipleShipmentStep1BasicInfoComponent,
    CreateMultipleShipmentStep1BasicInfoEmptyComponent,
    CreateMultipleShipmentStep2ShipmentInfoComponent,
    CreateMultipleShipmentStep2ShipmentInfoLocationComponent,
    CreateMultipleShipmentStep3ChooseFleetComponent,
    CreateMultipleShipmentStep3ChooseFleetEmptyComponent,
    CreateMultipleShipmentSuccessComponent,
    CreateMultipleShipmentDetailsWaitingComponent,
    CreateMultipleShipmentDetailsRunningComponent,
    SharedStepperMultiCompnent
  ]
  ,bootstrap: [SharedStepperCompnent,SharedStepperMultiCompnent]
})
export class MainDashboardModule {}
