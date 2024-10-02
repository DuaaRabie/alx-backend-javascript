import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([
    uploadPhoto(),
    createUser(),
  ]).then(([photoData, userData]) => {
    console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
  }).catch((error) => {
    console.log('Signup system offline');
    throw error;
  });
}
export default handleProfileSignup;
