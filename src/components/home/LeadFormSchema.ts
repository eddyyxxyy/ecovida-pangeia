import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Nome é obrigatório.")
    .max(50, "Nome deve ter no máximo 50 caracteres."),
  email: z
    .string()
    .email("E-mail deve ser válido.")
    .min(1, "E-mail é obrigatório"),
  phone: z
    .string()
    .regex(/^\+55\s\d{2}\s\d{5}-\d{4}$/, { message: "Telefone deve ser válido." })
    .min(1, "Telefone é obrigatório"),
});

export type TFormSchema = z.infer<typeof formSchema>;
