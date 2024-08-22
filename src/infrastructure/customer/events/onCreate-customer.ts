import * as functions from 'firebase-functions';
import * as firestore from 'firebase/firestore'
import { calculateAge } from 'src/infrastructure/common/util/calculateAge';

export const onCreateCustomer = functions.firestore
  .document('customer/{customerId}')
  .onCreate(async (snap, context) => {
    const birthday =snap.data().birthday as firestore.Timestamp
    const age = calculateAge(birthday.toDate());
    snap.ref.set({ age: age }, { merge: true });
  });
