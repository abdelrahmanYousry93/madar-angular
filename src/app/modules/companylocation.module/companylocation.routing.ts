import { Routes } from '@angular/router';
import { AddCompanyLocationComponent } from './addlocation.compnent/addlocation.compnent';
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
import { ContractFleetListComponent } from './contracts/contract-fleet-list.compnent/contract-fleet-list.compnent';
import { ContractBulkUploadComponent } from './contracts/contract-bulkupload.compnent/contract-bulkupload.compnent';
import { ContractBulkUploadStep2Component } from './contracts/contract-bulkuploadstep2.compnent/contract-bulkuploadstep2.compnent';


export const CompanyLocationRoutes: Routes = [
    {component:AddCompanyLocationComponent,path:'addlocation'},
    {component:ColorLogoCompanyLocationComponent,path:'colorlogo'},
    {component:AddNewReciverComponent,path:'addreciver'},
    {component:ReciversComponent,path:'recivers'},
    {component:AddAnotherNewReciverComponent,path:'addanotherreciver'},
    {component:ReciverListComponent,path:'reciverlist'},
    {component:ReciverBulkUploadComponent,path:'bulkupload'},
    {component:BulkUploadSummeryComponent,path:'bulkuploadsummery'},
    {component:PackagesComponent,path:'packages'},
    {component:AddPackageComponent,path:'addpackage'},
    {component:PackagesListComponent,path:'packageslist'},
    {component:UsersComponent,path:'users'},
    {component:AddUserComponent,path:'adduser'},
    {component:UserListComponent,path:'userlist'},
    {component:OnboardingComponent,path:'onboarding'},
    {component:ContractsComponent,path:'contracts'},
    {component:ContractListComponent,path:'contractlist'},
    {component:ContractPublicListComponent,path:'contractpublic'},
    {component:ContractFleetListComponent,path:'contractfleetlist'},
    {component:ContractBulkUploadComponent,path:'contractbulkupload'},
    {component:ContractBulkUploadStep2Component,path:'contractbulkuploadstep2'},
    
];

