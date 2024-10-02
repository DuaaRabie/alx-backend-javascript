export default function guardrail(mathFunction) {
  const queue = [];
  queue.push('Guardrail was processed');

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.message);
  }

  return queue;
}
