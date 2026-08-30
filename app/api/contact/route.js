import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// HTML escape function to prevent XSS
function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request) {
  try {
    const { name, phone, email, message } = await request.json();

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Escape all user inputs to prevent XSS
    const escapedName = escapeHtml(name);
    const escapedPhone = escapeHtml(phone);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message);

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to the same email
      replyTo: email, // Allow replying directly to the sender (email is validated by nodemailer)
      subject: `New Contact Form Submission from ${escapedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${escapedName}</p>
            <p><strong>Phone:</strong> ${escapedPhone}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapedEmail}">${escapedEmail}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #333; margin-top: 10px;">
              ${escapedMessage.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Vitespace contact form.</p>
            <p>You can reply directly to this email to respond to ${escapedName}.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        This email was sent from the Vitespace contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

