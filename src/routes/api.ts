import express from 'express';
import authController from '../controllers/auth.Controller';

const router = express.Router();

router.post('/auth/register', authController.register);

export default router;
