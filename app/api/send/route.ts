import { resend } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, userType } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'info@tlhglobalcareers.com';
    const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL || 'noreply@tlhglobalcareers.com';

    // 1. Send notification to Admin
    const adminRes = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Form Submission: ${userType || 'General Inquiry'} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #2563eb; color: white; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Lead Received</h1>
          </div>
          <div style="padding: 24px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Type:</strong> ${userType || 'General'}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; color: #64748b; font-size: 12px;">
            This email was sent from the TLH Global Careers contact form.
          </div>
        </div>
      `,
    });

    // 2. Send confirmation to User
    const userRes = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: `We've received your message, ${name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #10b981; color: white; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Reaching Out</h1>
          </div>
          <div style="padding: 24px;">
            <p>Hi ${name},</p>
            <p>Thank you for contacting TLH Global Careers. We've received your message regarding <strong>${userType || 'your inquiry'}</strong> and our team will get back to you shortly.</p>
            <p>Here's a copy of your message:</p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; font-style: italic;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
            <p>Best regards,<br/>The TLH Global Careers Team</p>
          </div>
          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; color: #64748b; font-size: 12px;">
             TLH Global Careers - Bridging Healthcare Across Borders
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, adminRes, userRes });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
