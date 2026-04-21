import { Schema, model, models } from 'mongoose';

export interface IContact {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      minlength: 10,
      maxlength: 1000,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = models.Contact || model<IContact>('Contact', ContactSchema);

export default Contact;