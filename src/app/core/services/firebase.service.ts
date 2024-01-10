import { Injectable } from '@angular/core';
import {
  getDatabase,
  ref,
  update,
  DataSnapshot,
  onChildAdded,
  Database,
  get,
  child,
} from '@angular/fire/database';

import { FireBaseAPI } from '../interfaces/firebase.interface';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService implements FireBaseAPI {
  private readonly db: Database = getDatabase();

  subscribe(
    collectionName: string,
    callback: (
      snapshot: DataSnapshot,
      previousChildName?: string | null | undefined
    ) => unknown
  ) {
    return onChildAdded(ref(this.db, collectionName), callback);
  }

  fetch(collectionName: string): Promise<DataSnapshot> {
    return get(child(ref(this.db), collectionName));
  }

  update(collections: { [key: string]: object }): Promise<void> {
    return update(ref(this.db), collections);
  }

  create(collections: { [key: string]: object }): Promise<void> {
    return update(ref(this.db), collections);
  }
}
