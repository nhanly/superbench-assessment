import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="w-full max-w-md rounded-lg bg-white/80 p-8 shadow-lg backdrop-blur-md"
    >
      <ng-content />
    </div>
  `,
  standalone: true,
})
export class CardComponent {}
