// login.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CardComponent } from '#/shared/components/card/card.component';
import { ToastComponent } from '#/shared/components/toast/toast.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from '../services/auth.service';
import { LoginFormData } from '../types/auth.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CardComponent, LoginFormComponent, ToastComponent],
})
export class LoginComponent {
  private router: Router = inject(Router);
  private authService: AuthService = inject(AuthService);

  login(credentials: LoginFormData) {
    this.authService
      .login(credentials)
      .finally(() => this.router.navigateByUrl('/chat'));
  }

  logout() {
    this.authService.logout();
  }
}
