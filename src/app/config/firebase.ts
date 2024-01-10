import { environment } from 'src/environments/environment.development';

// Firebase configuration
export const firebaseConfig = {
  apiKey: environment.firebaseApiKey,
  authDomain: environment.firebaseAuthDomain,
  projectId: environment.firebaseProjectId,
  storageBucket: environment.firebaseStorageBucket,
  messagingSenderId: environment.firebaseMessagingSenderId,
  appId: environment.firebaseAppId,
  databaseURL: environment.firebaseDatabaseURL,
};
