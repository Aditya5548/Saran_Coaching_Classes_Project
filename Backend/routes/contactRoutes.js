import { Router } from 'express';
import { createContactEnquiry } from '../controllers/contactController.js';
import { verifyApiKey } from '../middleware/apiKeyAuth.js';

const router = Router();
router.post('/', verifyApiKey, createContactEnquiry);

export default router;
