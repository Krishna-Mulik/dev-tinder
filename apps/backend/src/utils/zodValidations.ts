import z from "zod";

export const UserRegisterSchema = z.object({
    userName: z.string().trim(),
    fullName: z.string().trim(),
    email: z.email(),
    password: z.string().trim().min(6)
});

