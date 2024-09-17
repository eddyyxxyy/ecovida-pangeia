import * as React from "react";

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  render,
} from "@react-email/components";

interface ClubeDaTransicaoLeadEmailProps {
  name?: string;
  userEmail?: string;
  userPhone?: string;
}

const baseUrl = "https://ecovidapangeia.com";

export const ClubeDaTransicaoLeadEmail = ({
  name,
  userEmail,
  userPhone,
}: ClubeDaTransicaoLeadEmailProps) => {
  const previewText = `${name} gostaria de saber mais sobre o projeto`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/logo.webp`}
                width="120"
                height="120"
                alt="Logo do Projeto Pangeia Ecovida"
                className="my-0 mx-auto rounded-full"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>{name}</strong> está interessado em ser um fundador!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Olá, colaborador do projeto Pangeia!
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{name}</strong> (
              <Link
                href={`mailto:${userEmail}`}
                className="text-blue-600 no-underline"
              >
                {userEmail}
              </Link>
              ) preencheu o formulário de leads de nossa LP do <strong>Clube da Transição</strong>.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-green-600 rounded text-white text-[12px] font-bold uppercase no-underline text-center px-5 py-3"
                href={`https://api.whatsapp.com/send?phone=${userPhone}`}
              >
                Chamar no WhatsApp
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              ou copie e cole esse link no seu navegador:{" "}
              <Link href={`https://api.whatsapp.com/send?phone=${userPhone}`} className="text-blue-600 no-underline">
                {`https://api.whatsapp.com/send?phone=${userPhone}`}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              As informações contidas neste e-mail podem somente ser compartilhadas entre os colabores do projeto{" "}
              <span className="text-black">Pangeia</span> e, inclusive, somente para membros autorizados.
            </Text>
            <Text className="text-[#666666] text-center text-[12px] leading-[24px]">
              Copyright &copy; Pangeia Ecoeduca 2024
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ClubeDaTransicaoLeadEmail.PreviewProps = {
  name: "Edson Pimenta",
  userEmail: "edson.tibo@gmail.com",
  userPhone: "5516994379815",
} as ClubeDaTransicaoLeadEmailProps;

export const asHtml = async ({ name, userEmail, userPhone }: ClubeDaTransicaoLeadEmailProps) => {
  return await render(
    <ClubeDaTransicaoLeadEmail
      name={name}
      userEmail={userEmail}
      userPhone={userPhone}
    />,
  );
};

export default ClubeDaTransicaoLeadEmail;
