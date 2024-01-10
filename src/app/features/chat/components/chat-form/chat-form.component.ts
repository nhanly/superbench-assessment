import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
})
export class ChatFormComponent {
  @ViewChild('chatInput', { static: true })
  chatInput: ElementRef<HTMLInputElement>;
  @Output() submitChatMessage = new EventEmitter<string>();

  sendChatOnKeyDown($event: KeyboardEvent): void {
    if ($event.key === 'Enter' && this.chatInput.nativeElement.value) {
      this.sendChat();
    }
  }

  sendChat(): void {
    this.submitChatMessage.emit(this.chatInput.nativeElement.value);
    this.chatInput.nativeElement.value = '';
    this.chatInput.nativeElement.focus();
  }
}
