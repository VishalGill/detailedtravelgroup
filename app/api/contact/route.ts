import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, interest, message } = body;

    // Basic validation
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log to console (simulating email send)
    console.log('--- NEW INQUIRY ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Interest: ${interest}`);
    console.log(`Message: ${message}`);
    console.log('-------------------');

    // Here you would integrate with Resend, SendGrid, or your CRM
    // await resend.emails.send({ ... })

    return NextResponse.json(
      { message: 'Inquiry received' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

