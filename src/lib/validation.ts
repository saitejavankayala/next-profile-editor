import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone must be 10 digits'),
  location: z.string().min(2, 'Location is required'),
});

export type ProfileData = z.infer<typeof profileSchema>;
