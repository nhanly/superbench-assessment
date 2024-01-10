import { DataSnapshot, Unsubscribe } from '@angular/fire/database';

export interface FireBaseAPI {
  subscribe(
    collectionName: string,
    callback: (
      snapshot: DataSnapshot,
      previousChildName?: string | null | undefined
    ) => unknown
  ): Unsubscribe;
  create(collections: { [key: string]: object }): Promise<void>;
  update(collections: { [key: string]: object }): Promise<void>;
}
