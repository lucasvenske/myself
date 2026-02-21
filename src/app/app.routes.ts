import { Routes } from '@angular/router';
import { NG_DOC_ROUTING } from '@ng-doc/generated';
import { isAuthenticatedGuard } from './core/auth/guards/is-authenticated-guard';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { DocsWrapperComponent } from './docs/docs-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/layout').then(m => m.Layout),
    canActivate: [isAuthenticatedGuard],
    children: [
      {
        path: 'daily-report',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/pages/routes'),
  },
  {
    path: 'docs',
    component: DocsWrapperComponent,
    children: NG_DOC_ROUTING,
  },
];
