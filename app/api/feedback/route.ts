import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, suggestion } = await req.json();

    if (!email || !suggestion) {
      return NextResponse.json(
        { error: 'Email and suggestion are required' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    if (!process.env.ADMIN_EMAIL) {
      console.error('ADMIN_EMAIL is not configured');
      return NextResponse.json(
        { error: 'Admin email is not configured' },
        { status: 500 }
      );
    }

    const result = await resend.emails.send({
      from: 'Housing Guide <feedback@housingguide.com>',
      to: process.env.ADMIN_EMAIL,
      subject: 'New Housing Guide Suggestion',
      text: `New suggestion from ${email}:\n\n${suggestion}`,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    console.error('Error sending feedback:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send feedback',
        details: error.message || 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
} 