
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyLocationRoutes } from './companylocation.routing';
import { AddCompanyLocationComponent } from './addlocation.compnent/addlocation.compnent';
import { DialogModule } from 'primeng';
import { ColorLogoCompanyLocationComponent } from './addcolor-logo.compnent/addcolor-logo.compnent';
import { AddNewReciverComponent } from './recivers/add-new-reciver/add-new-reciver.compnent';
import { ReciversComponent } from './recivers/recivers.compnent/recivers.compnent';
import { AddAnotherNewReciverComponent } from './recivers/add-another-reciver/add-anotherreciver.compnent';
import { ReciverListComponent } from './recivers/recivers-list/reciver-list.compnent';
import { ReciverBulkUploadComponent } from './recivers/recivers-bulkupload/reciver-bulkupload.compnent';
import { BulkUploadSummeryComponent } from './recivers/bulkupload-summery/bulkupload-summery.compnent';
import { PackagesComponent } from './packages/packages.compnent/packages.compnent';
import { AddPackageComponent } from './packages/addpackage.compnent/addpackage.compnent';
import { PackagesListComponent } from './packages/packages-list.compnent/packages-list.compnent';
import { UsersComponent } from './users/users.compnent/users.compnent';
import { AddUserComponent } from './users/add-user.compnent/add-user.compnent';
import { UserListComponent } from './users/userlist.compnent/userlist.compnent';
import { OnboardingComponent } from './users/onboarding.compnent/onboarding.compnent';
import { ContractsComponent } from './contracts/contracts.compnent/contract.compnent';
import { ContractListComponent } from './contracts/contract-list.compnent/contract-list.compnent';
import { ContractPublicListComponent } from './contracts/contract-public-list.compnent/contract-public-list.compnent';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ContractFleetListComponent } from './contracts/contract-fleet-list.compnent/contract-fleet-list.compnent';
import { ContractBulkUploadComponent } from './contracts/contract-bulkupload.compnent/contract-bulkupload.compnent';
import { ContractBulkUploadStep2Component } from './contracts/contract-bulkuploadstep2.compnent/contract-bulkuploadstep2.compnent';
@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(CompanyLocationRoutes),DialogModule,ChartModule,DropdownModule
  ],
  declarations: [AddCompanyLocationComponent,
    ColorLogoCompanyLocationComponent,
    AddNewReciverComponent,ReciversComponent,
    AddAnotherNewReciverComponent,ReciverListComponent,
    ReciverBulkUploadComponent,BulkUploadSummeryComponent,PackagesComponent,AddPackageComponent,PackagesListComponent
  ,UsersComponent,AddUserComponent,UserListComponent,OnboardingComponent,
  ContractsComponent,ContractListComponent,ContractPublicListComponent,ContractFleetListComponent,
  ContractBulkUploadComponent,ContractBulkUploadStep2Component]
})
export class CompanyLocationModule {}
