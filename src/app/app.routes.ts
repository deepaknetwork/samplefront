import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { LoginComponent } from './views/pages/login/login.component';

export const routes: Routes = [
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
   
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'deals',
        loadComponent: () => import('./deals/deals.component').then((m) => m.DealsComponent),
        title:'AnOrg - deals'
      },
      {
        path: 'deploys',
        loadComponent: () => import('./deploys/deploys.component').then((m) => m.DeploysComponent),
         title:'AnOrg - deals'
      },
      {
        path: 'newdeal',
        loadComponent: () => import('./newdeal/newdeal.component').then((m) => m.NewdealComponent),
        title:'AnOrg - deals'
      },
      {
        path: 'viewdeal',
        loadComponent: () => import('./viewdeal/viewdeal.component').then((m) => m.ViewdealComponent),
        title:'AnOrg - deals'
      },
      {
        path: 'projects',
        loadComponent: () => import('./projects/projects.component').then((m) => m.ProjectsComponent)
      },
      {
        path: 'viewproject',
        loadComponent: () => import('./viewproject/viewproject.component').then((m) => m.ViewprojectComponent)
      },
      {
        path: 'editproject',
        loadComponent: () => import('./editproject/editproject.component').then((m) => m.EditprojectComponent)
      },
      {
        path: 'meets',
        loadComponent: () => import('./meets/meets.component').then((m) => m.MeetsComponent)
      },
      {
        path: 'calls',
        loadComponent: () => import('./calls/calls.component').then((m) => m.CallsComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then((m) => m.ProfileComponent)
      },
      {
        path: 'customers',
        loadComponent: () => import('./customers/customers.component').then((m) => m.CustomersComponent)
      },
      {
        path: 'admins',
        loadComponent: () => import('./admins/admins.component').then((m) => m.AdminsComponent)
      },
      {
        path: 'view',
        loadComponent: () => import('./view/view.component').then((m) => m.ViewComponent)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      },
      
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  // { path: '**', redirectTo: 'login' },
  
 
];
