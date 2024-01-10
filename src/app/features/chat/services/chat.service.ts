import { Injectable, OnDestroy, inject } from '@angular/core';
import { DataSnapshot, Unsubscribe } from '@angular/fire/database';
import { User } from 'firebase/auth';


import { ErrorService } from '#/core/services/error.service';
import { FirebaseService } from '#/core/services/firebase.service';

import { Chat, ChatDto, ChatUser, UserDto } from '../types/chat.type';

@Injectable({ providedIn: 'root' })
export class ChatService implements OnDestroy {
  // Injectable dependencies
  private readonly errorService = inject(ErrorService);
  private readonly firebaseService = inject(FirebaseService);

  private readonly collections = {
    chats: 'chats',
    userChats: 'user-chats',
    users: 'users',
  };
  private chatDataUnSubscribe: Unsubscribe;

  ngOnDestroy(): void {
    this.chatDataUnSubscribe();
  }

  initChatWSConnection(
    callbackFn: (
      snapshot: DataSnapshot,
      previousChildName?: string | null | undefined
    ) => unknown
  ): void {
    this.chatDataUnSubscribe = this.firebaseService.subscribe(
      this.collections.chats,
      callbackFn
    );
  }

  getUsers() {
    return this.firebaseService.fetch(this.collections.users);
  }

  sendChat(sender: User, chatContent: string): Promise<void> {
    const chatRequest = this.generateChatRequestDto(sender, chatContent);
    const updates = {
      [`/${this.collections.chats}/${chatRequest.uid}`]: chatRequest,
      [`/${this.collections.userChats}/${chatRequest.sender_uid}/${chatRequest.uid}`]:
        chatRequest,
    };

    return this.firebaseService
      .update(updates)
      .catch((error) => this.errorService.handleError(error));
  }

  mappingChatDtoToModel(chatDto: ChatDto): Chat {
    return {
      chatId: chatDto.uid,
      senderId: chatDto.sender_uid,
      senderName: chatDto.sender_name,
      content: chatDto.content,
      timestamp: new Date(chatDto.timestamp),
    };
  }

  mappingUserDtoToModel(user: UserDto): ChatUser {
    return {
      userId: user.uid,
      displayName: user.display_name,
      email: user.email,
    };
  }

  private generateChatRequestDto(
    sender: User,
    chatContent: string
  ): Partial<ChatDto> {
    const currentTime = new Date().getTime();
    return {
      uid: currentTime.toString(),
      sender_uid: sender.uid,
      sender_name: sender.email!,
      content: chatContent,
      timestamp: currentTime,
    };
  }
}
