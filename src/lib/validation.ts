import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  organization: z.string().min(2, 'Organization is required'),
  email: z.string().email('Valid email required'),
  phone: z
    .string()
    .regex(/^\+?[0-9]{7,15}$/i, 'Use international format (+123456789)'),
  service: z.string().min(1, 'Select a service'),
  dates: z.string().min(3, 'Provide travel or event dates'),
  origin: z.string().min(2, 'Origin required'),
  destination: z.string().min(2, 'Destination required'),
  requirements: z.string().min(10, 'Share key requirements'),
  preferredContact: z.enum(['email', 'phone', 'signal']),
  confidential: z.boolean().refine((val) => val, 'Acknowledgement required'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
