import expree from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = expree.Router();

router.post("/signup", signup);

export default router;