import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ToastState } from '#/core/constants/app.constant';

import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <div
      [@toastTrigger]="(toastService.showToast$ | async) ? 'open' : 'close'"
      class="fixed top-4 right-4 z-50"
    >
      <div
        class="bg-white shadow-lg rounded-lg overflow-hidden w-90 border border-gray-200 "
      >
        <div
          class="flex justify-between items-center px-6 py-3"
          [class]="toastService.toastState$ | async"
        >
          <div class="p-2 text-gray-600">
            {{ toastService.toastMessage$ | async }}
          </div>
          <button class="ml-4 text-gray-600" (click)="dismiss()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('toastTrigger', [
      state('open', style({ transform: 'translateY(0%)' })), // This is how the 'open' state is styled
      state('close', style({ transform: 'translateY(-200%)' })), // This is how the 'close' state is styled
      transition('open <=> close', [animate('300ms ease-in-out')]),
    ]),
  ],
  imports: [CommonModule],
  standalone: true,
})
export class ToastComponent {
  toastService = inject(ToastService);
  ToastState = ToastState;

  dismiss(): void {
    this.toastService.dismissToast();
  }
}
