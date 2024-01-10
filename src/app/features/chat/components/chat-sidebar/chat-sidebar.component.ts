import { Component, inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { ChatComponentState } from '../../states/chat.state';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
})
export class ChatSidebarComponent {
  private readonly auth: Auth = inject(Auth);
  private readonly router: Router = inject(Router);
  readonly state: ChatComponentState = inject(ChatComponentState);

  signOut(): void {
    signOut(this.auth).then(() => this.router.navigateByUrl('/login'));
  }
}
