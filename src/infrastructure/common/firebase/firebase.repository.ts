import { Inject, Injectable } from '@nestjs/common';
import { app } from 'firebase-admin';

@Injectable()
export class FirebaseRepository {
  private db: FirebaseFirestore.Firestore;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.db = firebaseApp.firestore();
  }

  public getDBInstance(): FirebaseFirestore.Firestore {
    return this.db;
  }

  public getCollection(
    nameCollection: string,
  ): FirebaseFirestore.CollectionReference {
    return this.db.collection(nameCollection);
  }
}
