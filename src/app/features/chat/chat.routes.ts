import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './components/chat.component';

export const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
