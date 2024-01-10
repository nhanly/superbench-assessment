import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';


import { AuthMessage, ToastState } from '#/core/constants/app.constant';
import { ErrorService } from '#/core/services/error.service';
import { LoaderService } from '#/core/services/loader.service';
import { ToastService } from '#/shared/components/toast/toast.service';

import { LoginFormData } from '../types/auth.type';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth: Auth = inject(Auth);
  private errorService: ErrorService = inject(ErrorService);
  private loaderService: LoaderService = inject(LoaderService);
  private toast: ToastService = inject(ToastService);

  login(credentials: LoginFormData): Promise<void> {
    this.loaderService.setLoading(true);
    return signInWithEmailAndPassword(
      this.auth,
      credentials.username!,
      credentials.password!,
    )
      .then(() => {
        this.loaderService.setLoading(false);
        this.toast.showToast(ToastState.Success, AuthMessage.LoginSuccessfully);
      })
      .catch((error) => {
        this.loaderService.setLoading(false);
        this.errorService.handleError(error);
      });
  }

  logout() {
    this.auth.signOut();
  }
}
