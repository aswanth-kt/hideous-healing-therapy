/**
 * Stubbed service for submitting contact and consultation requests.
 * This can be wired to a real backend API (e.g. Express/MongoDB) without modifying
 * the controller layer or view layer.
 */
export const submitConsultation = async (formData) => {
  // Simulate network latency (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  console.log('--- API Form Submission (MVC Model Service) ---');
  console.log('Data payload:', JSON.stringify(formData, null, 2));
  
  // Return mock successful response
  return {
    success: true,
    status: 200,
    message: "Confidential request received. We will contact you soon.",
    ticketId: `HH-${Math.floor(100000 + Math.random() * 900000)}`,
    submittedAt: new Date().toISOString()
  };
};

export default submitConsultation;
