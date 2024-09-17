export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { z } from "zod";

import { formSchema } from "@/components/home/LeadFormSchema";

dotenv.config();

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  const data = { name, email, phone };

  try {
    formSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.errors), { status: 400 });
    }
    return new Response("Erro de validação desconhecido.", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    secure: true,
    port: 465,
    auth: {
      user: "resend",
      pass: process.env.RESEND_API_KEY,
    },
  });

  const mailOptions = {
    from: "clubedatransicaoleads@ecovidapangeia.com",
    to: "delivered@resend.dev",
    subject: `${name} tem interesse em se tornar fundador`,
    text: `name: ${name}\nemail: ${email}\nphone: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response("Email enviado com sucesso!", { status: 200 });
  } catch {
    return new Response("Erro ao enviar email.", { status: 500 });
  }
};
