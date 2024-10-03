import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    // Call signUpUser function
    const signUpResult = await signUpUser(firstName, lastName);

    // Call uploadPhoto function
    const uploadResult = await uploadPhoto(fileName);

    // Return an array with the results of both promises
    return [
      {
        status: 'fulfilled',
        value: signUpResult,
      },
      {
        status: 'fulfilled',
        value: uploadResult,
      },
    ];
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error during profile signup:', error);
    return [
      {
        status: 'rejected',
        reason: 'Sign up failed',
      },
      {
        status: 'rejected',
        reason: 'Upload failed',
      },
    ];
  }
};

// Export the function so it can be imported in other files
export default handleProfileSignup;
