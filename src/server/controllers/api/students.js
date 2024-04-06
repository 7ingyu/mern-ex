import express from 'express';
import Student from '../../models/students.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

export default router;