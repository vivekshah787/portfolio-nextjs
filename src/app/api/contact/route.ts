import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Create transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipientEmail = process.env.CONTACT_TO || 'vivekshah061993@gmail.com';

    // Email to Vivek (enquiry notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `📬 New Enquiry: ${subject || 'Portfolio Contact'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #F8F6F1; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(100,70,20,0.12); }
            .header { background: #1A1208; padding: 36px 40px; }
            .header h1 { color: #F0A500; font-size: 28px; margin: 0; letter-spacing: -0.02em; }
            .header p { color: #8A7868; font-size: 13px; margin: 8px 0 0; }
            .body { padding: 40px; }
            .field { margin-bottom: 24px; }
            .label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #B8A898; margin-bottom: 6px; }
            .value { font-size: 15px; color: #1A1208; font-weight: 400; line-height: 1.6; }
            .message-box { background: #F8F6F1; border: 1px solid rgba(100,70,20,0.12); border-radius: 10px; padding: 20px; }
            .footer { background: #F8F6F1; padding: 20px 40px; border-top: 1px solid rgba(100,70,20,0.12); text-align: center; }
            .footer p { color: #B8A898; font-size: 12px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>New Enquiry ✦</h1>
              <p>Someone reached out through your portfolio</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color:#F0A500;text-decoration:none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject || '—'}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value message-box">${message.replace(/\n/g, '<br/>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent from vmshah.portfolio — ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Vivek Shah" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name.split(' ')[0]}! 👋`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #F8F6F1; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(100,70,20,0.12); }
            .header { background: #1A1208; padding: 36px 40px; }
            .header h1 { color: #F0A500; font-size: 26px; margin: 0; letter-spacing: -0.02em; }
            .body { padding: 40px; color: #6B5A48; font-size: 15px; line-height: 1.7; }
            .body strong { color: #1A1208; }
            .cta { display: inline-block; margin-top: 28px; background: #F0A500; color: #fff; text-decoration: none; padding: 13px 28px; border-radius: 40px; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
            .footer { background: #F8F6F1; padding: 20px 40px; border-top: 1px solid rgba(100,70,20,0.12); text-align: center; }
            .footer p { color: #B8A898; font-size: 12px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header"><h1>Hey ${name.split(' ')[0]}, got your message! ✦</h1></div>
            <div class="body">
              <p>Thanks for reaching out. I've received your enquiry and will get back to you within <strong>24–48 hours</strong>.</p>
              <p>In the meantime, feel free to explore more of my work or connect on LinkedIn.</p>
              <p style="margin-top:32px;">Warm regards,<br/><strong>Vivek Shah</strong><br/>Senior UI/Product Designer</p>
              <a href="https://vmshah.netlify.app/" class="cta">View Portfolio ↗</a>
            </div>
            <div class="footer"><p>vivekshah061993@gmail.com · Ahmedabad, Gujarat, India</p></div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    );
  }
}
