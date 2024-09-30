export default function returnHowManyArguments(...theArgs) {
  let total = 0;
  for (const arg of theArgs) { /* eslint-disable-line no-unused-vars */
    total += 1;
  }
  return total;
}
