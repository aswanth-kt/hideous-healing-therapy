import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be under 50 characters." }),
  
  age: z.preprocess((val) => Number(val), z.number({
    invalid_type_error: "Age must be a number."
  })
    .int({ message: "Age must be an integer." })
    .min(1, { message: "Age must be at least 1." })
    .max(120, { message: "Age must be under 120." })),
  
  gender: z.enum(['Male', 'Female', 'Other'], {
    error_map: () => ({ message: "Please select a gender." })
  }),
  
  contactNumber: z.string()
    .min(10, { message: "Contact number must be at least 10 digits." })
    .max(15, { message: "Contact number must be under 15 digits." })
    .regex(/^[0-9+\s-]+$/, { message: "Invalid contact number format." }),
  
  education: z.string()
    .min(2, { message: "Education detail is required." })
    .max(100, { message: "Education must be under 100 characters." }),
  
  occupation: z.string()
    .min(2, { message: "Occupation detail is required." })
    .max(100, { message: "Occupation must be under 100 characters." }),
  
  economicStatus: z.string()
    .min(2, { message: "Economic status or background is required." })
    .max(50, { message: "Economic status must be under 50 characters." }),
  
  maritalStatus: z.enum(['Single', 'Married'], {
    error_map: () => ({ message: "Please select marital status." })
  }),
  
  familyType: z.enum(['Nuclear Family', 'Joint Family'], {
    error_map: () => ({ message: "Please select family type." })
  }),
  
  familyMembersCount: z.enum(['3', '4', '4+'], {
    error_map: () => ({ message: "Please select number of family members." })
  }),
  
  previouslyAttended: z.enum(['Yes', 'No'], {
    error_map: () => ({ message: "Please select if you previously attended any sessions." })
  }),
  
  previousMatchRating: z.preprocess((val) => val === '' ? 5 : Number(val), z.number()
    .min(1)
    .max(10)
    .optional()
    .default(5)),
  
  concerns: z.string()
    .min(10, { message: "Please describe your concerns in at least 10 characters." })
    .max(1000, { message: "Concerns must be under 1000 characters." })
});

export default contactFormSchema;
