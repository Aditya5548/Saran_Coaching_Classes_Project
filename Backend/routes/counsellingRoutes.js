import { Router } from 'express';
import { createCounsellingRequest } from '../controllers/counsellingController.js';

const router = Router();
router.post('/', createCounsellingRequest);

export default router;
