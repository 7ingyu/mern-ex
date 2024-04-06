import mongoose from 'mongoose';

const Teacher = mongoose.model('Teacher', {
  name: String,
  subject: String,
});

export default Teacher