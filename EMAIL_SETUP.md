# Email Setup Instructions for True North Equine Coaching

## Local Development Setup

1. **Create a `.env` file** in your project root with the following content:

```
# Email Settings
EMAIL_HOST=mail.saunders-simmons.co.uk
EMAIL_PORT=465
EMAIL_USER=web@saunders-simmons.co.uk
EMAIL_PASS=cykmix-9makmy-wuQton
EMAIL_FROM=web@saunders-simmons.co.uk
EMAIL_TO=hello@saunders-simmons.co.uk
```

## Vercel Production Setup

Add these environment variables to your Vercel project:

1. Go to your Vercel dashboard
2. Navigate to your project
3. Go to Settings → Environment Variables
4. Add each of the following variables:

- `EMAIL_HOST` = `mail.saunders-simmons.co.uk`
- `EMAIL_PORT` = `465`
- `EMAIL_USER` = `web@saunders-simmons.co.uk`
- `EMAIL_PASS` = `cykmix-9makmy-wuQton`
- `EMAIL_FROM` = `web@saunders-simmons.co.uk`
- `EMAIL_TO` = `hello@saunders-simmons.co.uk`

## Email Recipients

The contact form will send emails to:
1. `hello@saunders-simmons.co.uk` (primary)
2. `maria-lucy@truenorthequinecoaching.com` (True North Equine Coaching)

## Testing

### Option 1: Quick Email Test (Recommended)
1. Create the `.env` file with the configuration above
2. Run the test script: `node test-email.js`
3. Check both email addresses for the test message

### Option 2: Full Contact Form Test
1. Create the `.env` file with the configuration above
2. Run the development server: `npm run dev`
3. Navigate to the contact section
4. Fill out and submit the form
5. Check both email addresses for the message

### Quick Start Commands
```bash
# Create .env file (copy from .env.example)
cp .env.example .env

# Test email configuration
node test-email.js

# Start development server
npm run dev
```

## Security Notes

- The `.env` file is already in `.gitignore` to prevent accidental commits
- Environment variables are only accessible server-side in Astro
- The email password is securely stored and not exposed to the client

## Troubleshooting

If emails aren't being sent:
1. Verify all environment variables are set correctly
2. Check the browser console for any JavaScript errors
3. Check the server logs for email sending errors
4. Ensure the email server settings are correct 