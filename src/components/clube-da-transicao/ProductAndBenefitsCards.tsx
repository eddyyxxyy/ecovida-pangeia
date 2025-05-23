import { HandCoins, BadgeCheck, Laptop, Smartphone, Tablet, Eye, BadgeDollarSign, Gem } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const benefits = [
  {
    title: "Quando quiser e como quiser",
    description: "O acesso é seu, entre quando quiser e estude os conteúdos que quiser",
  },
  {
    title: "Pague de diversas formas:",
    description: "Pix, Boleto, Cartão (débito e crédito) e mais",
  },
  {
    title: "Acesse de qualquer lugar:",
    description: "Pelo celular, computador, tablet, etc...",
  },
];

const exclusiveBenefits = [
  {
    title: "Hospedagem na Ecovida Pangeia",
    description: "Acesso à hospedagem em nossas instalações com descontos de até 60%",
  },
  {
    title: "Vivências presenciais e online",
    description: "Acesso às vivencias presenciais e outros cursos online com até 50% de desconto",
  },
  {
    title: "Participação em sorteios",
    description: "Acesso e participação em sorteios exclusivos de produtos e hospedagens",
  },
  {
    title: "Aprender e evoluir em forúns",
    description: "Participação em forúns exclusivos sobre ações de construção da Ecovila",
  },
];

type CardProps = React.ComponentProps<typeof Card>

export const ProductAndBenefitsCards = ({ className, ...props }: CardProps) => {
  return (
    <>
      <Card className={cn("bg-brand-mud text-white col-span-3 md:col-span-1", className)} {...props}>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Benefícios</CardTitle>
          <CardDescription className="text-gray-200 text-lg">Garantias e muito mais.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4 rounded-md md:space-x-0 lg:space-x-4 bg-white border p-4">
            <div className="p-2 border border-white rounded-full bg-brand-mud md:sr-only lg:not-sr-only lg:block lg:p-2">
              <HandCoins className="text-white lg:size-8" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-brand-mud leading-none">
                Garantia de até <span className="font-bold">7 dias</span>!
              </p>
              <p className="text-xs text-gray-600">
                Seu dinheiro de volta, sem perguntas!
              </p>
            </div>
          </div>
          <div className="mt-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-white" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {benefit.title}
                  </p>
                  <p className="text-sm text-gray-200">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <a
            href="#quero-saber-mais-sobre-ser-fundador"
            rel="noopener noreferrer nofollow"
            className="w-full"
          >
            <Button className="w-full bg-white text-brand-mud hover:bg-white hover:brightness-90 transition-all">
              <Eye className="mr-2 h-4 w-4" /> Quero saber mais
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card className={cn("flex flex-col bg-brand-orange col-span-3 md:col-span-2", className)} {...props}>
        <CardHeader className="text-center text-white">
          <CardTitle className="text-3xl">Seja um Fundador</CardTitle>
          <CardDescription className="text-lg text-gray-200">e faça parte dessa transformação.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 grid gap-4">
          <div className="flex flex-col items-center justify-center gap-x-4 rounded-md text-brand-orange bg-white border p-4">
            <div className="flex items-center space-x-4">
              <div className="flex gap-4 items-center">
                <BadgeDollarSign className="size-20 md:size-24" />
                <div className="grid">
                  <p className="text-xs text-gray-500 md:text-xs">
                    De <span className="line-through">R$599,00</span>{" "}
                    por <span className="text-sm">R$432,00</span><span className="text-xs"> ou</span>
                  </p>
                  <p className="whitespace-nowrap text-3xl font-bold md:text-5xl">
                    R$36,00<span className="text-sm text-gray-500 md:text-base">/12x</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 pt-4 space-y-4 text-center">
              <p className="text-lg text-center font-bold">
                Pague com Pix, cartões de crédito e débito, boleto e mais opções.
              </p>
              <p className="text-lg text-center">
                Acesse com seu dispositivo favorito, quando e onde quiser!
              </p>
              <div className="w-full flex items-center justify-center">
                <Laptop className="size-20" />
                <Tablet className="size-12" />
                <Smartphone className="size-8" />
              </div>
            </div>  
          </div>
        </CardContent>
        <CardFooter>
          <a
            href="https://pay.hotmart.com/X93273748V"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="w-full group"
          >
            <Button className="w-full bg-white text-brand-orange text-lg hover:bg-white hover:brightness-90 transition-all" size={"lg"}>
              <BadgeCheck className="mr-2 size-5" /> Quero ser fundador!
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card className={cn("bg-brand-green text-white col-span-3", className)} {...props}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Vantagens exclusivas para fundadores</CardTitle>
          <CardDescription className="text-gray-200 text-lg">Especial, feita para você</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex md:flex-col items-center gap-4 rounded-md bg-white border p-4">
            <div className="bg-brand-green p-2 rounded-full">
              <Gem className="text-white md:size-16" />
            </div>
            <div className="flex-1 space-y-1 md:text-center">
              <p className="text-sm font-medium text-brand-green leading-none md:text-2xl">
                Comunidade, hospedagem, sorteios, forúns...
              </p>
              <p className="text-xs text-gray-600 md:text-lg lg:w-4/5 mx-auto">
                Muito mais que um produto, com sua participação ativa seremos juntos
                fundadores do Novo Paradigma: um projeto ambiental, cultural e social.
              </p>
            </div>
          </div>
          <div className="mt-4 md:grid md:grid-cols-2">
            {exclusiveBenefits.map((benefit, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-white md:size-3 md:translate-y-2" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none md:text-xl">
                    {benefit.title}
                  </p>
                  <p className="text-sm text-gray-200 md:text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <a
            href="https://pay.hotmart.com/X93273748V"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="w-full group"
          >
            <Button className="w-full bg-white text-brand-green text-lg hover:bg-white hover:brightness-90 transition-all" size={"lg"}>
              <BadgeCheck className="mr-2 size-5" /> Me tornar fundador agora!
            </Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
};
