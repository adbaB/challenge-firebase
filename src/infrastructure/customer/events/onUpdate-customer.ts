import * as functions from 'firebase-functions';
import * as firestore from 'firebase/firestore';
import { calculateAge } from 'src/infrastructure/common/util/calculateAge';

export const onUpdateCustomer = functions.firestore
  .document('customer/{customerId}')
  .onUpdate(async (change, context) => {
    const afterBirthday = change.after.data()?.birthday as firestore.Timestamp;
    const beforeBirthday = change.before.data()?.birthday as firestore.Timestamp;

    if (afterBirthday.toDate().getTime() !== beforeBirthday.toDate().getTime()) {
      console.log(beforeBirthday.toDate())
      const age = calculateAge(afterBirthday.toDate());
      console.log(age)
      change.before.ref.set({ age: age }, { merge: true });
    }
  });
