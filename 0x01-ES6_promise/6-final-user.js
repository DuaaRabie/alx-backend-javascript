import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(results => {
    return [
      { status: 'fulfilled', value: results[0] },
      { status: 'fulfilled', value: results[1] },
    ];
  }).catch(error => {
    return [{ status: 'rejected', value: error }];
  });
}
