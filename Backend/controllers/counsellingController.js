import mongoose from 'mongoose';
import CounsellingRequest from '../models/CounsellingRequest.js';
import { buildCounsellingEmail, sendNotificationEmail } from '../services/emailService.js';
import { clean, isValidEmail, isValidPhone } from '../utils/validators.js';

export async function createCounsellingRequest(req, res) {
  try {
    const studentName = clean(req.body.studentName);
    const parentName = clean(req.body.parentName);
    const phone = clean(req.body.phone);
    const email = clean(req.body.email);
    const classLevel = clean(req.body.classLevel);
    const preferredDate = clean(req.body.preferredDate);
    const preferredTime = clean(req.body.preferredTime);
    const message = clean(req.body.message);

    if (!studentName || !parentName || !phone || !classLevel) {
      return res.status(400).json({
        message: 'Student name, parent name, phone and class are required.',
      });
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

    const request = await CounsellingRequest.create({
      studentName,
      parentName,
      phone,
      email,
      classLevel,
      preferredDate,
      preferredTime,
      message,
    });

    let emailed = false;
    try {
      emailed = await sendNotificationEmail({
        subject: `New Counselling Booking — ${studentName}`,
        replyTo: email,
        text: [
          'New counselling request received from Saran Coaching Classes website.',
          `Student: ${studentName}`,
          `Parent/Guardian: ${parentName}`,
          `Phone: ${phone}`,
          `Email: ${email || 'Not provided'}`,
          `Class/Grade: ${classLevel}`,
          `Preferred date: ${preferredDate || 'Not specified'}`,
          `Preferred time: ${preferredTime || 'Not specified'}`,
          `Message: ${message || 'No additional message'}`,
          `Request ID: ${request._id}`,
        ].join('\n'),
        html: buildCounsellingEmail({ studentName, parentName, phone, email, classLevel, preferredDate, preferredTime, message, requestId: request._id }),
      });
    } catch (mailError) {
      console.error('Counselling email failed:', mailError);
    }

    return res.status(201).json({
      message: emailed
        ? 'Counselling request booked successfully.'
        : 'Counselling request received successfully. Email notification is not configured yet.',
      requestId: request._id,
    });
  } catch (error) {
    console.error('Counselling request error:', error);
    return res.status(500).json({ message: 'Unable to process counselling request right now.' });
  }
}
