import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({
        message: "All fields are required"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const transporter = nodemailer.createTransport({
      host: "mail.saunders-simmons.co.uk",
      port: parseInt("465"),
      secure: true,
      auth: {
        user: "web@saunders-simmons.co.uk",
        pass: "cykmix-9makmy-wuQton"
      }
    });
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Enquiry - True North Equine Coaching</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #283454 0%, #1e2741 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
          .header p { margin: 10px 0 0 0; opacity: 0.9; }
          .content { padding: 30px; }
          .field-group { margin-bottom: 25px; }
          .field-label { font-weight: bold; color: #283454; margin-bottom: 5px; display: block; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
          .field-value { background: #f8f9fa; padding: 12px 15px; border-radius: 6px; border-left: 4px solid #d4a853; margin-top: 5px; }
          .message-content { background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #d4a853; white-space: pre-wrap; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef; }
          .footer p { margin: 0; color: #6c757d; font-size: 14px; }
          .highlight { color: #d4a853; font-weight: bold; }
          .timestamp { color: #6c757d; font-size: 12px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🐴 New Enquiry Received 🐴</h1>
            <p>True North Equine Coaching</p>
          </div>
          
          <div class="content">
            <p>🐎 You have received a new enquiry through your website contact form.</p>
            
            <div class="field-group">
              <span class="field-label">👤 Client Name</span>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field-group">
              <span class="field-label">📧 Email Address</span>
              <div class="field-value">
                <a href="mailto:${email}" style="color: #283454; text-decoration: none;">${email}</a>
              </div>
            </div>
            
            <div class="field-group">
              <span class="field-label">🎯 Service Interest</span>
              <div class="field-value">${subject}</div>
            </div>
            
            <div class="field-group">
              <span class="field-label">💬 Message</span>
              <div class="message-content">${message}</div>
            </div>
            
            <div class="timestamp">
              📅 Received: ${(/* @__PURE__ */ new Date()).toLocaleString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/London"
    })}
            </div>
          </div>
          
          <div class="footer">
            <p><strong>🐴 True North Equine Coaching 🐴</strong></p>
            <p>Guiding you and your horse with compassion and empathy</p>
            <p style="margin-top: 10px;">
              📧 <span class="highlight">Reply directly to this email to respond to ${name}</span>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;
    const textContent = `
NEW ENQUIRY - True North Equine Coaching

Client Details:
===============
Name: ${name}
Email: ${email}
Service Interest: ${subject}

Message:
========
${message}

Received: ${(/* @__PURE__ */ new Date()).toLocaleString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/London"
    })}

---
True North Equine Coaching
Guiding you and your horse with compassion and empathy
    `;
    await transporter.sendMail({
      from: "web@saunders-simmons.co.uk",
      to: "hello@saunders-simmons.co.uk",
      replyTo: email,
      // This allows you to reply directly to the client
      subject: `🐴 New Enquiry: ${subject} - ${name}`,
      text: textContent,
      html: htmlContent
    });
    return new Response(JSON.stringify({
      message: "Message sent successfully"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({
      message: "Error sending message"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
