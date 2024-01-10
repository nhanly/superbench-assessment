import { Component, Input, inject } from '@angular/core';

import { ChatComponentState } from '#/features/chat/states/chat.state';
import { Chat } from '#/features/chat/types/chat.type';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
})
export class ChatBoxComponent {
  @Input() chat: Chat;

  readonly state: ChatComponentState = inject(ChatComponentState);
}
