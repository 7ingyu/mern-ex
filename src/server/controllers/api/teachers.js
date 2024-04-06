import express from 'express';
import Teacher from '../../models/teachers.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});

router.post('/', async (req, res) => {
  // console.log(req.body)
  const teacher = await Teacher.create(req.body);
  res.json(teacher);
});

export default router;