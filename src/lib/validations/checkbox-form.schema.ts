import * as z from "zod";

export const checkboxFormSchema = z.object({
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  }),
  notifications: z.object({
    email: z.boolean(),
    sms: z.boolean(),
    push: z.boolean()
  }).refine(data => Object.values(data).some(val => val), {
    message: "You must select at least one notification method"
  }),
  interests: z.array(z.string()).min(1, {
    message: "Please select at least one area of interest"
  }),
  subscription: z.enum(["free", "pro", "enterprise"]).optional(),
  marketing: z.boolean().optional(),
});

export type CheckboxFormData = z.infer<typeof checkboxFormSchema>; 