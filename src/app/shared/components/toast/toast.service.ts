import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, delay, filter, takeUntil, tap } from 'rxjs';

import { ToastState } from '#/core/constants/app.constant';

@Injectable({
  providedIn: 'root',
})
export class ToastService implements OnDestroy {
  showToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  toastState$: BehaviorSubject<ToastState> = new BehaviorSubject<ToastState>(
    ToastState.Success,
  );

  private readonly destroyed$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.showToast$.complete();
    this.toastMessage$.complete();
    this.toastState$.complete();
  }

  showToast(toastState: ToastState, toastMessage: string): void {
    this.toastState$.next(toastState);
    this.toastMessage$.next(toastMessage);

    this.showToast$.next(true);
    this.showToast$
      .asObservable()
      .pipe(
        filter((s) => !!s),
        delay(5000),
        tap(() => this.showToast$.next(false)),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  dismissToast(): void {
    this.showToast$.next(false);
  }
}
