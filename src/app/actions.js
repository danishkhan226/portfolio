'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Validate the data
  if (!name || !email || !subject || !message) {
    return { error: 'All fields are required.' };
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: 'Invalid email address.' };
  }

  try {
    // Simulated success for showcase purposes
    // In a real scenario, you would uncomment the code below and provide a RESEND_API_KEY
    /*
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['danisandp2@gmail.com'], 
      subject: `New Contact: ${subject}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { error: error.message };
    }
    */

    // Simulate a slight delay for realism
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (e) {
    console.error('Server Action Error:', e);
    return { error: 'Failed to send message. Please try again later.' };
  }
}

