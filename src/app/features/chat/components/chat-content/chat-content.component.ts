import { Component, ElementRef, ViewChild, inject } from '@angular/core';

import { ChatComponentState } from '../../states/chat.state';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
})
export class ChatContentComponent {
  @ViewChild('chatContainer', { static: true })
  chatContainer: ElementRef<HTMLElement>;

  readonly state: ChatComponentState = inject(ChatComponentState);
}
