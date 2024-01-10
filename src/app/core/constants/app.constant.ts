export enum ToastState {
  Success = 'border-l-8 border-l-emerald-600',
  Error = 'border-l-8 border-l-rose-600',
  Info = 'border-l-8 border-l-stone-600',
}

export enum FirebaseErrorCode {
  InvalidCredential = 'auth/invalid-credential',
  InvalidEmail = 'auth/invalid-email',
  InvalidUsername = 'auth/invalid-username',
}

export const FirebaseErrorMessage = {
  DefaultMessage: 'Internal Server Error! Please contact your administrator.',
  [FirebaseErrorCode.InvalidCredential]:
    'Invalid username or password! Please try again.',
};

export enum AuthMessage {
  LoginSuccessfully = 'Login successfully!',
}
