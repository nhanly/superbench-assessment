import { Chats, CurrentUser, OtherUser } from '../types/chat.type';

export const ChatCollectionKey: {
  chats: Chats;
  currentUser: CurrentUser;
  users: OtherUser;
} = {
  chats: 'chats',
  currentUser: 'currentUser',
  users: 'otherUser',
};
