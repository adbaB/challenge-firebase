export function calculateAge(birthday: Date): number {
  const today = new Date();
  const differentInMiliseconds = today.getTime() - birthday.getTime();
  const ageInYear = Math.floor(differentInMiliseconds / (1000 * 60 * 60 * 24 * 365)); 
  return ageInYear;
}