import mongoose from 'mongoose';

const Student = mongoose.model('Student', {
  name: String,
  teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }]
});

export default Student