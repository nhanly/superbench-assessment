import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler, OnDestroy, inject } from '@angular/core';
import { FirebaseError } from 'firebase/app';
import { BehaviorSubject, Subject, filter, takeUntil, tap } from 'rxjs';

import { ToastService } from '#/shared/components/toast/toast.service';

import {
  FirebaseErrorCode,
  FirebaseErrorMessage,
  ToastState,
} from '../constants/app.constant';
import { Maybe } from '../types/app.type';


@Injectable({ providedIn: 'root' })
export class ErrorService extends ErrorHandler implements OnDestroy {
  toastService: ToastService = inject(ToastService);

  private readonly errors$ = new BehaviorSubject<
    Maybe<FirebaseError | HttpErrorResponse>
  >(null);
  private readonly destroyed$ = new Subject<void>();

  constructor() {
    super();
    // Handle firebase error
    this.errors$
      .pipe(
        filter((error) => !!error && error instanceof FirebaseError),
        tap((error) => {
          const errorMessage = this.getFirebaseErrorMessage(
            error as FirebaseError
          );
          this.toastService.showToast(ToastState.Error, errorMessage);
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  override handleError(error: FirebaseError | HttpErrorResponse): void {
    this.errors$.next(error);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private getFirebaseErrorMessage(error: FirebaseError): string {
    const code: FirebaseErrorCode = error.code as FirebaseErrorCode;
    if (
      [
        FirebaseErrorCode.InvalidCredential,
        FirebaseErrorCode.InvalidEmail,
        FirebaseErrorCode.InvalidUsername,
      ].includes(code)
    ) {
      return FirebaseErrorMessage[FirebaseErrorCode.InvalidCredential];
    }

    return FirebaseErrorMessage.DefaultMessage;
  }
}
