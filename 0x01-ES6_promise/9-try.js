export default function guardrail(mathFunction) {
  const queue = [];
  
  try {
    // Execute the mathFunction and store the result
    const result = mathFunction();
    
    // Append the result to the queue
    queue.push(result);
    
    // Always append "Guardrail was processed"
    queue.push('Guardrail was processed');
  } catch (error) {
    // If an error occurs, append the error message to the queue
    const errorMessage = 'Error: ' + error.message
    queue.push(errorMessage);
    
    // Always append "Guardrail was processed"
    queue.push('Guardrail was processed');
  }
  
  return queue;
}
