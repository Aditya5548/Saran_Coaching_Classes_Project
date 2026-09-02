import mongoose from 'mongoose';
import Enquiry from '../models/Enquiry.js';
import { buildContactEmail, sendNotificationEmail } from '../services/emailService.js';
import { clean, isValidEmail, isValidPhone } from '../utils/validators.js';

export async function createContactEnquiry(req, res) {
  try {
    const name = clean(req.body.name);
    const phone = clean(req.body.phone);
    const email = clean(req.body.email);
    const course = clean(req.body.course);
    const message = clean(req.body.message);

    if (!name || !phone) {
      return res.status(400).json({ message: 'Name and phone are required.' });
    }
    if (!isValidPhone(phone)) {
      return res.status(400).json({ message: 'Please enter a valid phone number.' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Please enter a valid email.' });
    }
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ message: 'Database is temporarily unavailable. Please try again.' });
    }

    const enquiry = await Enquiry.create({ name, phone, email, course, message });
    let emailed = false;

    try {
      emailed = await sendNotificationEmail({
        subject: `New Coaching Enquiry — ${name}`,
        replyTo: email,
        text: [
          'New enquiry received from Saran Coaching Classes website.',
          `Name: ${name}`,
          `Phone: ${phone}`,
          `Email: ${email || 'Not provided'}`,
          `Course: ${course || 'Not selected'}`,
          `Message: ${message || 'No message'}`,
          `Enquiry ID: ${enquiry._id}`,
        ].join('\n'),
        html: buildContactEmail({ name, phone, email, course, message, enquiryId: enquiry._id }),
      });
    } catch (mailError) {
      console.error('Contact email failed:', mailError);
    }

    return res.status(201).json({
      message: emailed
        ? 'Enquiry sent successfully.'
        : 'Enquiry received successfully. Email notification is not configured yet.',
      enquiryId: enquiry._id,
    });
  } catch (error) {
    console.error('Contact enquiry error:', error);
    return res.status(500).json({ message: 'Unable to process enquiry right now.' });
  }
}
