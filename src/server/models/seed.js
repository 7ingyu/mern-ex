import 'dotenv/config';
import mongoose from 'mongoose';
import Teacher from './teachers.js';
import Student from './students.js';

const seed = async () => {
  console.log('connecting to database...');
  await mongoose.connect(process.env.MONGO_URI);
  console.log('database connected!')

  console.log('clearing database...');
  await Teacher.deleteMany();
  await Student.deleteMany();
  console.log('database cleared!')

  console.log('seeding database...');
  const teachers = [
    {
      name: 'Ting-Yu',
      subject: 'Software Engineering'
    },
    {
      name: 'Jyoti',
      subject: 'Software Engineering'
    }
  ];

  const teacherDocs = await Teacher.insertMany(teachers);
  console.log(`added ${teacherDocs.length} teachers!`);

  let students = [
    'Geralt',
    'Ciri',
    'Yennefer',
    'Triss',
  ]

  students = students.map(name => {
    const index = Math.floor(Math.random() * teacherDocs.length);
    return {
      name, teachers: [teacherDocs[index].id]
    }
  })

  const studentDocs = await Student.insertMany(students);
  console.log(`added ${studentDocs.length} students!`);

  return 0;
}

seed();