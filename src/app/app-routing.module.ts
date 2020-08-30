import { Routes } from '@angular/router';

import { AuhtLayoutComponent } from './layouts/auht-layout/auht-layout.component';


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
     /*  {path:"hotel",loadChildren:"./modules/home/home.module#HomeModule"},
    {path:"auth",loadChildren:"./modules/auth/auth.module#AuthModule"} */
    ]
  }
];

