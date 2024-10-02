export async function getResponseFromAPI() {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const apiResponse = { message: "Hello from API!" };
      resolve(apiResponse);
    }, 1000); // Simulate a delay
  });
}

