import { Schema, model } from 'mongoose';

const newsSchema = new Schema({
  id: {
    type: String,
  },
  created_at: {
    type: Date,
  },
  text: {
    type: String,
    required: [true, 'Text required'],
  },
  title: {
    type: String,
    required: [true, 'Title required'],
  },
  user: {
      firstName: {
        type: String,
      },
      id: {
        type: String,
      },
      image: {
        type: String,
      },
      middleName: {
        type: String,
      },
      surName: {
        type: String,
      },
      username: {
        type: String,
      },
  }
});

export const NewsModel = model('news', newsSchema);