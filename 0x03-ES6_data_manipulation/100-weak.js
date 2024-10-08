const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const callCount = weakMap.get(endpoint) || 0;

  weakMap.set(endpoint, callCount + 1);
  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI};
