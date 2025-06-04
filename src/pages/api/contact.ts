import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({
        message: 'All fields are required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: import.meta.env.EMAIL_HOST,
      port: parseInt(import.meta.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });

    // Format email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Service Interest: ${subject}
      
      Message:
      ${message}
    `;

    // Send email
    await transporter.sendMail({
      from: import.meta.env.EMAIL_FROM,
      to: import.meta.env.EMAIL_TO,
      subject: `New Enquiry: ${subject}`,
      text: emailContent,
    });

    return new Response(JSON.stringify({
      message: 'Message sent successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({
      message: 'Error sending message'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 