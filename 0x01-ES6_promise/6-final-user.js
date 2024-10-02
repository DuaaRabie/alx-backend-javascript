import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => [
    { status: 'fulfilled', value: results[0] },
    { status: 'fulfilled', value: results[1] },
  ]).catch((error) => [{ status: 'rejected', value: error }]);
}
