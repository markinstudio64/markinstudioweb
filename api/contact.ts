import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, company, whatsapp, message, selectedService } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Markin Studio <onboarding@resend.dev>',
            to: ['markinstudio64@gmail.com'],
            replyTo: email,
            subject: `New Project Inquiry from ${name} - ${company || 'Individual'}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #000; color: #fff; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .field { margin-bottom: 10px; }
            .label { font-weight: bold; text-transform: uppercase; font-size: 12px; color: #666; }
            .value { font-size: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Message</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>

              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company || 'N/A'}</div>
              </div>

              <div class="field">
                <div class="label">WhatsApp</div>
                <div class="value">${whatsapp || 'N/A'}</div>
              </div>

              <div class="field">
                <div class="label">Services</div>
                <div class="value">${selectedService || 'None'}</div>
              </div>

              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(400).json({ error: error.message });
        }

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
