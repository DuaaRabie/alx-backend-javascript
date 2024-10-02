function handleResponseFromAPI(promise) {
  return promise.then(
    // eslint-disable-next-line no-unused-vars
    (resolve) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    },
    // eslint-disable-next-line no-unused-vars
    (reject) => {
      console.log('Got a response from the API');
      return new Error('');
    },
  );
}
export default handleResponseFromAPI;
