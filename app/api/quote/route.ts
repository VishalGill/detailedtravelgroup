import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';

// Uncomment and configure when deploying with API routes (not for static export)
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, message, subject } = body;

    // For static export, this route won't work. You need to either:
    // 1. Deploy to Vercel/Netlify with serverless functions
    // 2. Use a third-party form service like Formspree, Getform, or Basin
    // 3. Remove the 'output: export' from next.config.js

    // Example Resend implementation (requires serverless environment):
    /*
    const { data, error } = await resend.emails.send({
      from: 'Detailed Travel Group <noreply@detailedtravelgroup.com>',
      to: ['concierge@detailedtravelgroup.com'],
      subject: subject || `New Service Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #000; color: #fff; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #000; }
              .value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Service Request</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                ${phone ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                ` : ''}
                ${service ? `
                <div class="field">
                  <div class="label">Service:</div>
                  <div class="value">${service}</div>
                </div>
                ` : ''}
                ${date ? `
                <div class="field">
                  <div class="label">Preferred Date:</div>
                  <div class="value">${date}</div>
                </div>
                ` : ''}
                ${message ? `
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
                ` : ''}
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
    */

    // For static export, return success (forms won't actually work)
    console.log('Form submission received:', body);
    return NextResponse.json({
      success: true,
      message: 'This is a demo response. Configure email service for production.'
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
