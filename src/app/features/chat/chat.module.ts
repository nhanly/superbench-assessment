import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

import { AvatarNamePipe } from '#/core/pipes/avatarName.pipe';

import { ChatRoutingModule } from './chat.routes';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatContentComponent } from './components/chat-content/chat-content.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { ChatComponent } from './components/chat.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule,
    TooltipModule,
    AvatarNamePipe,
  ],
  exports: [],
  declarations: [
    ChatComponent,
    ChatBoxComponent,
    ChatSidebarComponent,
    ChatFormComponent,
    ChatContentComponent,
    ChatHeaderComponent,
  ],
  providers: [],
})
export class ChatModule {}
