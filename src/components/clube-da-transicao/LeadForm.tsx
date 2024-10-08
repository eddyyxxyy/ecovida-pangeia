import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { withMask } from "use-mask-input";
import { EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";

import { formSchema, type TFormSchema } from "./LeadFormSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


export const LeadForm = () => {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "+55",
      email: "",
      name: "",
    },
  });

  const onSubmit = async (values: TFormSchema) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);

    try {
      const response = await fetch("/api/send-lead-email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
      }

      alert("Formulário enviado com sucesso!");
    } catch {
      alert("Erro ao enviar o formulário");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Nome</FormLabel>
              <FormControl>
                <Input className="h-12 text-base" placeholder="seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">E-mail</FormLabel>
              <FormControl>
                <Input className="h-12 text-base" placeholder="exemplo@email.com" {...field} />
              </FormControl>
              <FormDescription>
                E-mail para contato
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Telefone (WhatsApp)</FormLabel>
              <FormControl ref={withMask("+99 99 [9]9999-9999")}>
                <Input className="h-12 text-base" placeholder="+55 16 99999-9999" {...field} />
              </FormControl>
              <FormDescription>
                Telefone para contato
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="bg-brand-green"
          disabled={form.formState.isSubmitting}
        >
          {
            form.formState.isSubmitting ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Enviando
              </>
            ) : (
              <>
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Enviar
              </>
            )
          }
        </Button>
      </form>
    </Form>
  );
};
