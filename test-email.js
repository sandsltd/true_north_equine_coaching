// Simple email test script for True North Equine Coaching
// Run with: node test-email.js

import nodemailer from 'nodemailer';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

async function testEmail() {
  console.log('🐴 Testing True North Equine Coaching Email Configuration...\n');

  // Check environment variables
  const requiredVars = ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASS', 'EMAIL_FROM'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:', missing);
    console.error('Please make sure your .env file contains all required variables.');
    process.exit(1);
  }

  console.log('✅ All required environment variables found');
  console.log('📧 Email configuration:');
  console.log(`   Host: ${process.env.EMAIL_HOST}`);
  console.log(`   Port: ${process.env.EMAIL_PORT}`);
  console.log(`   User: ${process.env.EMAIL_USER}`);
  console.log(`   From: ${process.env.EMAIL_FROM}`);
  console.log(`   To: ${process.env.EMAIL_TO || 'hello@saunders-simmons.co.uk'}, maria-lucy@truenorthequinecoaching.com\n`);

  try {
    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('🔄 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');

    // Send test email
    console.log('📨 Sending test email...');
    const recipients = [
      process.env.EMAIL_TO || 'hello@saunders-simmons.co.uk',
      'maria-lucy@truenorthequinecoaching.com'
    ];

    const result = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: recipients.join(', '),
      subject: '🐴 Test Email - True North Equine Coaching Contact Form',
      text: `This is a test email from the True North Equine Coaching contact form.

If you receive this email, the contact form configuration is working correctly.

Test sent at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}

Best regards,
True North Equine Coaching Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #283454;">🐴 Test Email - True North Equine Coaching</h2>
          <p>This is a test email from the True North Equine Coaching contact form.</p>
          <p><strong>If you receive this email, the contact form configuration is working correctly.</strong></p>
          <p style="color: #666; font-size: 14px;">Test sent at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #283454; font-weight: bold;">Best regards,<br>True North Equine Coaching Website</p>
        </div>
      `
    });

    console.log('✅ Test email sent successfully!');
    console.log(`📧 Message ID: ${result.messageId}`);
    console.log(`📬 Sent to: ${recipients.join(', ')}\n`);
    console.log('🎉 Email configuration is working correctly!');
    console.log('Your contact form should now work properly on both development and production.');

  } catch (error) {
    console.error('❌ Error testing email configuration:');
    console.error(error.message);
    console.error('\n💡 Common issues:');
    console.error('- Check your email credentials are correct');
    console.error('- Verify the email server settings');
    console.error('- Ensure your email account allows SMTP access');
    console.error('- Check if your hosting provider blocks SMTP connections');
    process.exit(1);
  }
}

testEmail(); 