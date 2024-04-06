import express from 'express';
import teachersController from './api/teachers.js';
import studentsController from './api/students.js';

const router = express.Router();

router.use('/teachers', teachersController)
router.use('/students', studentsController)

export default router;