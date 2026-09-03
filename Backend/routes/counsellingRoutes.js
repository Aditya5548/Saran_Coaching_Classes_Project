import { Router } from 'express';
import { createCounsellingRequest } from '../controllers/counsellingController.js';
import { verifyApiKey } from '../middleware/apiKeyAuth.js';

const router = Router();
router.post('/', verifyApiKey, createCounsellingRequest);

export default router;
