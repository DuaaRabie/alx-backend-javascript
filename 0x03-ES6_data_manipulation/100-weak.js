export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const callCount = weakMap.get(endpoint) || 0;

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, callCount + 1);

  // Simulate API call
  setTimeout(() => {
    console.log(`${endpoint.protocol}://${endpoint.name}: Query successful`);
  }, 1000); // Simulating a delay

  return `Querying ${endpoint.name}`;
}

// Helper function to get call count
export function getCallCount(endpoint) {
  return weakMap.get(endpoint) || 0;
}
