import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { SignalState } from 'ngx-signal-state';

import { ChatCollectionKey } from '../constants/chat.constant';
import { Chat, ChatState, ChatUser } from '../types/chat.type';

@Injectable({
  providedIn: 'root',
})
export class ChatComponentState extends SignalState<ChatState> {
  private readonly auth: Auth = inject(Auth);

  readonly chats = this.select(ChatCollectionKey.chats);
  readonly currentUser = this.select(ChatCollectionKey.currentUser);
  readonly otherUser = this.select(ChatCollectionKey.users);

  constructor() {
    super();
    this.initialize({
      chats: [],
      currentUser: this.auth.currentUser!,
      otherUser: null,
    });
  }

  addChat(chatData: Chat) {
    const allChatIds = this.chats().map((chat) => chat.chatId);
    if (!allChatIds.includes(chatData.chatId)) {
      this.patch({
        chats: [...this.chats(), chatData],
      });
    }
  }

  updateOtherUser(chatUser: ChatUser) {
    this.patch({
      otherUser: chatUser,
    });
  }
}
