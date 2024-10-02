import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([
    uploadPhoto(),
    createUser(),
  ]).then(([photoData, userData]) => {
    console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
  // eslint-disable-next-line no-unused-vars
  }).catch((error) => {
    console.log('Signup system offline');
  });
}
export default handleProfileSignup;
