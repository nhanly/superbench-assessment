import { Component, inject } from '@angular/core';

import { ChatComponentState } from '../../states/chat.state';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
})
export class ChatHeaderComponent {
  readonly state: ChatComponentState = inject(ChatComponentState);
}
