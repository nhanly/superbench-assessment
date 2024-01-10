import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { LoginFormData } from '#/auth/types/auth.type';
import { LoaderService } from '#/core/services/loader.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule],
})
export class LoginFormComponent {
  @Output() submitLoginForm = new EventEmitter<LoginFormData>();

  readonly loaderService: LoaderService = inject(LoaderService);

  username = signal(undefined);
  password = signal(undefined);

  loading = false;

  private readonly viewModel = computed(() => {
    return {
      valid: this.username() && this.password(),
      errors: {
        username: this.username() === '',
        password: this.password() === '',
      },
    };
  });

  // Expose the ViewModel as a getter
  protected get vm() {
    return this.viewModel();
  }

  constructor() {}

  submitForm() {
    const loginModel: LoginFormData = {
      username: this.username(),
      password: this.password(),
    };
    this.submitLoginForm.emit(loginModel);
  }
}
