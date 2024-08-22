import * as functions from 'firebase-functions';
import * as bcrypt from 'bcrypt';
import { generatePassword } from 'src/infrastructure/common/util/generate-password';
export const onCreate = functions.firestore
  .document('user/{userId}')
  .onCreate(async (snap, context) => {
    if(!snap.data()?.password) {
      const password = generatePassword()
      const passwordHash = await bcrypt.hash(password,10)
      snap.ref.set({password: passwordHash  },{merge:true})
    }
  })
  ;
