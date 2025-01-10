import { z } from "zod";

export const buySchema = z.object({
  amount: z.string().refine((value)=> Number(value) > 0, {
    message: 'Amount must greater than 0'
  }),
});
