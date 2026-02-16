// API endpoint - note: this won't work in a Vite-only setup without a backend server
// This would need to be implemented on an actual backend server
export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Only POST requests allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const body = await request.json();
  const { name, email, company, whatsapp, message, selectedService } = body;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Note: This requires a backend server to work properly
    // Resend integration would happen on the actual backend
    console.log('Contact form submission:', { name, email, company, whatsapp, message, selectedService });
    
    // Simulated response for demonstration
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process contact form' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}