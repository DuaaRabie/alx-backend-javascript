import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photoResult = null;
  let userResult = null;

  try {
    // Call uploadPhoto and store the result
    photoResult = await uploadPhoto();

    // Call createUser and store the result
    userResult = await createUser();

    // Return the object with both results
    return {
      photo: photoResult,
      user: userResult,
    };
  } catch (error) {
    console.error('Error occurred:', error);
    // If either function fails, return an empty object
    return { photo: null, user: null };
  }
}
