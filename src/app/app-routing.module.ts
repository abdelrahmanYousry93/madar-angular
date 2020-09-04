import { Routes } from '@angular/router';

import { AuhtLayoutComponent } from './layouts/auht-layout/auht-layout.component';
import { CompanyLocationLayoutComponent } from './layouts/companylocation-layout/companylocation-layout.component';
import { MainDashboardSideLayoutComponent } from './layouts/maindashboard-layout/maindashboard-layout-side/maindashboard-layout-side.compnent';
import { MainDashboardLayoutComponent } from './layouts/maindashboard-layout/maindashboard-layout.compnent';


export const AppRoutes: Routes = [
  
  {
    path: '',
    component: AuhtLayoutComponent,
    children: [ 
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
      path: '',
      loadChildren:
        () => import('./modules/auth.module/auth.module').then(m => m.AuthModule)
    }
    ]
  },
  {
    path: 'location',
    component: CompanyLocationLayoutComponent,
    children: [ 
      {
        path: '',
        redirectTo: 'location/addlocation',
        pathMatch: 'full'
      },
      {
      path: '',
      loadChildren:
        () => import('./modules/companylocation.module/companylocation.module').then(m => m.CompanyLocationModule)
    }
    ]
  },
  {
    path: 'main',
    component: MainDashboardLayoutComponent,
    children: [ 
      {
        path: '',
        redirectTo: 'main/dashboard',
        pathMatch: 'full'
      },
      {
      path: '',
      loadChildren:
        () => import('./modules/miandashboard.module/maindashboard.mobule').then(m => m.MainDashboardModule)
    }
    ]
  }
];

