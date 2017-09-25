import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

model('User', UserSchema);

export default model('User');
