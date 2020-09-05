import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboards/dashboard.compnent/dashboard.compnent';
import { DashboardSearchComponent } from './dashboards/dashboard-search.compnent/dashboard-search.compnent';
import { ShipmentListComponent } from './shipmentlists/shipmentlist.compnent/shipmentlist.compnent';
import { ShipmentListNoResaultComponent } from './shipmentlists/shipmentlist-noresault/shipmentlist-noresault.compnent';
import { CompanySettingsComponent } from './manages/company-settings/company-settings.component';
import { RecieversListComponent } from './manages/recievers-list/recievers-list.component';
import { CompanySettingsEditComponent } from './manages/company-settings-edit/company-settings-edit.component';
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
import { CreateSingleShipmentInformationComponent } from './shipmentlists/single-shipments/create-single-shipment-information.compnent/create-single-shipment-information.compnent';
import { CreateSingleShipmentPackageComponent } from './shipmentlists/single-shipments/create-single-shipment-package.compnent/create-single-shipment-package.compnent';
import { CreateSingleShipmentReciverComponent } from './shipmentlists/single-shipments/create-reciver-shipment.compnent/create-reciver-shipment.compnent';
import { CreateSingleShipmenAddReciverComponent } from './shipmentlists/single-shipments/create-reciver-shipment-add.compnent/create-reciver-shipment-add.compnent';
import { CreateSingleContractFleetComponent } from './shipmentlists/single-shipments/create-single-contract-fleet.compnent/create-single-contract-fleet.compnent';
import { CreateSingleAdddContractFleetComponent } from './shipmentlists/single-shipments/create-single-add-fleet-contract.compnent/create-single-add-fleet-contract.compnent';
import { CreateSingleCongratuolationComponent } from './shipmentlists/single-shipments/create-single-congratiolation.compnent/create-single-congratiolation.compnent';
import { CreateSingleShipmentSummeryComponent } from './shipmentlists/single-shipments/create-single-summery.compnent/create-single-summery.compnent';

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



export const MainDashboardRoutes: Routes = [{component:DashboardComponent,path:"dashboard"},
{component:DashboardSearchComponent,path:"dashboardsearch"},
{component:ShipmentListComponent,path:"shipmentlist"},
{component:ShipmentListNoResaultComponent,path:"shipmentlistnoresault"},
{component: CompanySettingsComponent , path: "CompanySettingsComponent"},
{component: CompanySettingsEditComponent , path: "CompanySettingsEditComponent"},
{component: RecieversListComponent , path: "RecieversListComponent"},
{component: AddNewRecieverStep1Component , path: "AddNewRecieverStep1Component"},
{component: AddNewRecieverStep2Component , path: "AddNewRecieverStep2Component"},
{component: UsersEmptyComponent , path: "UsersEmptyComponent"},
{component: UsersListComponent , path: "UsersListComponent"},
{component: AddNewUserComponent , path: "AddNewUserComponent"},
{component: NotificationSettingsComponent , path: "NotificationSettingsComponent"},
{component: NotificationSettingsEditComponent , path: "NotificationSettingsEditComponent"},
{component: ShipmentDetailsComponent , path: "shipmentdetail"},
{component: AllFleetsComponent , path: "allfleet"},
{component: FleetProvidersContractComponent , path: "fleetcontract"},
{component: CreateShipmentComponent , path: "createshipment"},
{component: CreateSingleShipmentComponent , path: "createsingleshipment"},
{component: CreateSingleShipmentInformationComponent , path: "createsingleshipmentinfo"},
{component: CreateSingleShipmentPackageComponent , path: "createsingleshipmentpackage"},
{component: CreateSingleShipmentReciverComponent , path: "createsingleshipmentreciver"},
{component: CreateSingleShipmenAddReciverComponent , path: "createsingleshipmentaddreciver"},
{component: CreateSingleContractFleetComponent , path: "createsinglecontractfleet"},
{component: CreateSingleAdddContractFleetComponent , path: "createsinglecontractaddfleet"},
{component: CreateSingleCongratuolationComponent , path: "createsinglecongrat"},
{component: CreateSingleShipmentSummeryComponent , path: "createsinglesummery"},
{component: CreateBulkShipmentComponent , path: "CreateBulkShipmentComponent"},
    {component: CreateBulkShipmentUploadComponent , path: "CreateBulkShipmentUploadComponent"},
    {component: CreateBulkShipmentListComponent , path: "CreateBulkShipmentListComponent"},
    {component: CreateBulkShipmentDetailsComponent , path: "CreateBulkShipmentDetailsComponent"},

    {component: CreateMultipleShipmentComponent , path: "CreateMultipleShipmentComponent"},
    {component: CreateMultipleShipmentStep1BasicInfoComponent , path: "CreateMultipleShipmentStep1BasicInfoComponent"},
    {component: CreateMultipleShipmentStep1BasicInfoEmptyComponent , path: "CreateMultipleShipmentStep1BasicInfoEmptyComponent"},
    {component: CreateMultipleShipmentStep2ShipmentInfoComponent , path: "CreateMultipleShipmentStep2ShipmentInfoComponent"},
    {component: CreateMultipleShipmentStep2ShipmentInfoLocationComponent , path: "CreateMultipleShipmentStep2ShipmentInfoLocationComponent"},
    {component: CreateMultipleShipmentStep3ChooseFleetComponent , path: "CreateMultipleShipmentStep3ChooseFleetComponent"},
    {component: CreateMultipleShipmentStep3ChooseFleetEmptyComponent , path: "CreateMultipleShipmentStep3ChooseFleetEmptyComponent"},
    {component: CreateMultipleShipmentSuccessComponent , path: "CreateMultipleShipmentSuccessComponent"},
    {component: CreateMultipleShipmentDetailsWaitingComponent , path: "CreateMultipleShipmentDetailsWaitingComponent"},
    {component: CreateMultipleShipmentDetailsRunningComponent , path: "CreateMultipleShipmentDetailsRunningComponent"},

];

