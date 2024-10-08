export default function updateUniqueItems(map) {
  if (!(arg instanceof Map)) {
    throw new Error("Cannot procss");
  }
  return map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
