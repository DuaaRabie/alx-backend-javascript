export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push('Guardrail was processed');
    queue.push(mathFunction());
  } catch (error) {
    queue.push('Guardrail was processed');
    queue.push(error.message);
  }

  return queue;
}
