import { NextResponse } from 'next/server';
import { z, ZodError } from 'zod';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please provide a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    await dbConnect();

    const contact = await Contact.create(validatedData);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully', data: contact },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      const firstError = error.issues[0];
      return NextResponse.json(
        { success: false, error: firstError?.message || 'Validation error' },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}