import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './shell/page-404/page-404.component';

export const routes: Routes = [
  {
    path: 'chat',
    title: 'Chat page',
    loadChildren: () =>
      import('./features/chat/chat.module').then((m) => m.ChatModule),
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
  {
    path: 'login',
    title: 'Login page',
    loadComponent: () =>
      import('./auth/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }, // Wildcard route for a 404 page
];
