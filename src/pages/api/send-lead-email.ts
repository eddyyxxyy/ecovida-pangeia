export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { z } from "zod";

import { formSchema } from "@/components/clube-da-transicao/LeadFormSchema";
import { asHtml } from "transactional/emails/clube-da-transicao-lead-email";

dotenv.config();

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  let name = formData.get("name") as string;
  let email = formData.get("email") as string;
  let phone = formData.get("phone") as string;

  const data = { name, email, phone };

  try {
    formSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.errors), { status: 400 });
    }
    return new Response("Erro de validação desconhecido.", { status: 400 });
  }

  name = name.trim();
  email = email.trim();
  phone = phone
    .trim()
    .replaceAll("+", "")
    .replaceAll(" ", "")
    .replaceAll("-", "");

  const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    secure: true,
    port: 465,
    auth: {
      user: "resend",
      pass: process.env.RESEND_API_KEY,
    },
  });

  const emailHtml = await asHtml({ name, userEmail: email, userPhone: phone });

  const mailOptions = {
    from: "clubedatransicaoleads@ecovidapangeia.com",
    to: "pangeiaecoeduca@gmail.com",
    subject: `${name} tem interesse em se tornar fundador`,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response("Email enviado com sucesso!", { status: 200 });
  } catch {
    return new Response("Erro ao enviar email.", { status: 500 });
  }
};
