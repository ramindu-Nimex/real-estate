import expree from 'express';
import { signup,signin } from '../controllers/auth.controller.js';

const router = expree.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;