import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(([signData, photoData]) => {
    return [
      {
        status: 'success',
        value: signData.body
      },
      {
        status: 'success',
        value: photoData.body
      }
    ];
  }).catch(error => {
    return [
      {
        status: 'error',
        value: error.message || 'An unknown error occurred'
      },
      {
        status: 'error',
        value: error.message || 'An unknown error occurred'
      }
    ];
  });
}
