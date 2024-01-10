import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { DataSnapshot } from '@angular/fire/database';

import { ChatContentComponent } from './chat-content/chat-content.component';
import { ChatService } from '../services/chat.service';
import { ChatComponentState } from '../states/chat.state';
import { ChatDto, UsersResponse } from '../types/chat.type';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  @ViewChild('chatContent', { static: true })
  chatContent: ChatContentComponent;

  readonly chatService: ChatService = inject(ChatService);
  readonly state: ChatComponentState = inject(ChatComponentState);
  readonly currentUser = inject(Auth).currentUser;

  ngOnInit() {
    this.initChatState();
  }

  private async initChatState() {
    // open ws connection for real-time chat update
    this.chatService.initChatWSConnection((snapshot: DataSnapshot) => {
      const chatData = snapshot.val() as ChatDto;
      this.state.addChat(this.chatService.mappingChatDtoToModel(chatData));
    });
    // get all users
    this.chatService.getUsers().then((snapshot: DataSnapshot) => {
      const users = snapshot.val() as UsersResponse;
      if (users) {
        const otherUserId = Object.keys(users)
          .filter((_, index) => index < 2)
          .find((id) => id !== this.currentUser!.uid);
        otherUserId &&
          this.state.updateOtherUser(
            this.chatService.mappingUserDtoToModel(users[otherUserId])
          );
      }
    });
  }

  sendChat(chatContent: string): void {
    this.chatService.sendChat(this.state.currentUser(), chatContent);
  }
}
