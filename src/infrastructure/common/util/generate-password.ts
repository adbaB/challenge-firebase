import * as password from 'generate-password';
export function generatePassword() {
  return password.generate({
    length: 15,
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: true,
    strict: true,
  });
}
