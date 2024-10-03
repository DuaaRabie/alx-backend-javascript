export async function uploadPhoto() {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, body: 'photo-profile-1' });
    }, 1000);
  });
}

export async function createUser() {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ firstName: 'Guillaume', lastName: 'Salva' });
    }, 1500);
  });
}

// main.js
import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
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
      user: userResult
    };
  } catch (error) {
    console.error('Error occurred:', error);
    // If either function fails, return an empty object
    return { photo: null, user: null };
  }
}

// Usage
const test = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

test();
