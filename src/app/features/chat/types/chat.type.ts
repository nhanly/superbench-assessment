import { User } from '@angular/fire/auth';

// chat component state
export type ChatState = {
  chats: Chat[];
  currentUser: User;
  otherUser: ChatUser | null;
};

export type Chats = 'chats';
export type CurrentUser = 'currentUser';
export type OtherUser = 'otherUser';

// UI model
export type Chat = {
  chatId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
};

export type ChatUser = Pick<User, 'displayName' | 'email'> & {
  userId: string;
};

// Dto used for interacting with firebase realtime database
export type ChatDto = {
  uid: string;
  sender_uid: string;
  sender_name: string;
  content: string;
  timestamp: number;
};

export type UserDto = {
  uid: string;
  display_name: string;
  email: string;
};
// Dynamic chat response data from firebase db snapshot
export type ChatResponse = {
  [key: string]: ChatDto;
};

export type UsersResponse = {
  [key: string]: UserDto;
};
