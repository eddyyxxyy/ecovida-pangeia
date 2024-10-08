import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
  
export function LearningThemesAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-brand-mud text-start font-bold md:text-lg">
          <h4>
            Seu Zé (Zé Veramato) &#8212; Alegoria da Nova Era
          </h4>
        </AccordionTrigger>
        <AccordionContent className="text-brand-green font-medium text-justify md:text-base lg:text-lg">
          <div className="space-y-4">
            <div>
              <h5 className="font-normal pb-2">Sobre o conteúdo:</h5>
              <p>
                O quadro "Alegoria da Nova Era" com José aborda sua jornada de vida e experiência
                em construção de comunidades sustentáveis. Ele compartilha insights sobre agricultura
                sustentável, apicultura, bioconstrução e a vida no Instituto Pangeia, explorando como
                viver em harmonia com a natureza e encontrar motivação e propósito na vida.
              </p>
            </div>
            <div>
              <h5 className="font-normal pb-2">Sobre o Autor:</h5>
              <p>
                José é o idealizador da Ecovida Pangeia e, com formação em Geografia pela UFV,
                tem experiência em recuperação de solos, bioconstrução e apicultura. Fundador
                da Companhia do Teatro do Iluminado, ele agora se dedica ao Instituto Pangeia,
                promovendo a sustentabilidade e a harmonia com a natureza. No quadro "Alegoria
                da Nova Era", ele compartilha suas experiências em construção de comunidades
                sustentáveis.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-brand-mud text-start font-bold md:text-lg">
          <h4>
            Isabela Fernandes &#8212; Conversas Ayurvédicas
          </h4>
        </AccordionTrigger>
        <AccordionContent className="text-brand-green font-medium text-justify md:text-base lg:text-lg">
          <div className="space-y-4">
            <div>
              <h5 className="font-normal pb-2">Sobre o conteúdo:</h5>
              <p>
                Isabela, terapeuta ayurveda e co-fundadora do Instituto Pangeia, compartilhará
                em áudios os princípios e práticas do Ayurveda. Ela abordará como essa sabedoria
                promove equilíbrio e bem-estar, detalhando a aplicação dos conceitos ayurvédicos
                na vida cotidiana e no contexto das atividades do Instituto Pangeia. Os áudios
                proporcionarão uma visão prática e acessível sobre a integração do Ayurveda em
                diferentes aspectos da vida e da saúde.
              </p>
            </div>
            <div>
              <h5 className="font-normal pb-2">Sobre a Autora:</h5>
              <p>
                Isabela Fernandes é guardiã e co-fundadora do Instituto Pangeia e atua como
                advogada na Associação Ecovida Pangeia. Formada em Direito, é também terapeuta
                Ayurveda, com formação pela FAESDA, e está cursando nutrição na UFVJM. Após
                uma carreira jurídica, encontrou no Ayurveda uma maneira de se reconectar com
                suas origens e práticas ancestrais, aplicando essas experiências no Instituto Pangeia.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-brand-mud text-start font-bold md:text-lg">
          <h4>
            Matheus Barbosa &#8212; Educação Ambiental para Pais e Filhos
          </h4>
        </AccordionTrigger>
        <AccordionContent className="text-brand-green font-medium text-justify md:text-base lg:text-lg">
          <div className="space-y-4">
            <div>
              <h5 className="font-normal pb-2">Sobre o conteúdo:</h5>
              <p>
                Como contribuição fundamental ao Clube da Transição, oferece ao público sua obra
                “Eco & Esperança“, na qual compartilha uma cativante narrativa voltada ao
                público infantil, além de valores e ações práticas direcionadas à educação para
                a Sustentabilidade e o respeito à Mãe Natureza.
              </p>
            </div>
            <div>
              <h5 className="font-normal pb-2">Sobre o Autor:</h5>
              <p>
                Matheus Barbosa é escritor, educador e digital marketer e atua como Estrategista
                Digital no Instituto Pangeia. Com Bacharel e Licenciatura em História pela Unesp
                e Mestrado em Literatura pela UFSCar, encontrou na esfera da comunicação e das
                questões ambientais os propósitos de sua existência. Atualmente, atua no mercado
                digital enquanto copywriter e estrategista com foco em growth marketing.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-brand-mud text-start font-bold md:text-lg">
          <h4>
            Rafael Pedreschi &#8212; Arquitetura Sustentável e Bioarquitetura
          </h4>
        </AccordionTrigger>
        <AccordionContent className="text-brand-green font-medium text-justify md:text-base lg:text-lg">
          <div className="space-y-4">
            <div>
              <h5 className="font-normal pb-2">Sobre o conteúdo:</h5>
              <p>
                O curso "Café com Arquitetura" aborda princípios de sustentabilidade
                e permacultura, o impacto da construção convencional, e a bioconstrução como alternativa.
                Também explora técnicas ancestrais e contemporâneas, como pau a pique, adobe, superadobe,
                taipa de pilão, construção com madeira, bambu, e telhados verdes.
              </p>
            </div>
            <div>
              <h5 className="font-normal pb-2">Sobre o Autor:</h5>
              <p>
                Rafael Pedreschi é bacharel em Arquitetura e Urbanismo pelo Centro Universitário
                de Lavras (UNILAVRAS), com foco em sustentabilidade. Ele explora métodos construtivos
                alternativos e técnicas vernaculares, integrando esses sistemas em um design
                contemporâneo. Seu TFG abordou a bioconstrução e a arquitetura ecológica como
                soluções para moradias acessíveis às classes de menor poder aquisitivo. Rafael
                acredita que a arquitetura sustentável deve ser colaborativa, consciente e acessível
                para todos.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-brand-mud text-start font-bold md:text-lg">
          <h4>
            André Bura &#8212; Economia do Despertar
          </h4>
        </AccordionTrigger>
        <AccordionContent className="text-brand-green font-medium text-justify md:text-base lg:text-lg">
          <div className="space-y-4">
            <div>
              <h5 className="font-normal pb-2">Sobre o conteúdo:</h5>
              <p>
                Aborda a Transição Planetária no aspecto socioeconômico, explorando a
                mudança de um modelo econômico linear e competitivo para um sistema circular e
                cooperativo, com enfoque energético-espiritual. Introduz conceitos de energética,
                economia e como aplicá-los na vida prática, além de explorar formas de empreender
                alinhadas com os princípios da "Nova Terra".
              </p>
            </div>
            <div>
              <h5 className="font-normal pb-2">Sobre o Autor:</h5>
              <p>
                André Bura é economista, com MBA e pós-graduação, e possui mais de 20 anos de
                experiência em diversas áreas, incluindo hospitais, bancos, corretoras, imóveis
                e fintechs. Atualmente, é fundador da empresa Economia do Despertar e diretor
                financeiro do projeto FreedomeE. Sempre inclinado a trilhar um caminho alternativo,
                André intensificou sua dedicação durante a pandemia, abandonando os paradigmas
                sociais tradicionais. Seu foco agora está em soluções financeiras que alinham as
                melhores práticas de mercado ao momento de transição planetária.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-brand-mud text-start font-bold md:text-lg">
          <h4>
            Jordão Vieira &#8212; Direito para Ecovilas
          </h4>
        </AccordionTrigger>
        <AccordionContent className="text-brand-green font-medium text-justify md:text-base lg:text-lg">
          <div className="space-y-4">
            <div>
              <h5 className="font-normal pb-2">Sobre o conteúdo:</h5>
              <p>
                Série de vídeos que aborda o conceito das ecovilas, sua importância no desenvolvimento de
                um estilo de vida sustentável, e seu papel na crise ambiental global. Discute os desafios,
                críticas e o potencial das ecovilas como laboratórios de sustentabilidade, além de fornecer
                uma visão geral das ecovilas no Brasil e sua relação com o Estado. Também oferece um guia
                prático para quem deseja participar de uma ecovila, refletindo sobre como essas comunidades
                podem inspirar mudanças para um futuro mais sustentável.
              </p>
            </div>
            <div>
              <h5 className="font-normal pb-2">Sobre o autor:</h5>
              <p>
                Jordão Vieira Silva é um especialista em sustentabilidade e desenvolvimento comunitário,
                atualmente Doutorando em Ciência Florestal pela UFVJM. Ele concluiu um Mestrado em
                Ciências Humanas na mesma universidade em 2020, com uma dissertação pioneira sobre os
                desafios e possibilidades legais das ecovilas no Brasil. Formado em Direito pela UFMG e
                com especialização em Economia Solidária pela UFT, Jordão trabalha desde 2011 na criação
                de ecovilas e associações, focando em transformar desafios em soluções sustentáveis e de
                bem-estar coletivo, com uma abordagem clara e impactante.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7" className="border-transparent">
        <AccordionTrigger className="text-brand-mud text-start font-bold md:text-lg">
          <h4>
            Agta Roberta &#8212; Conhecendo a Rosa do Deserto
          </h4>
        </AccordionTrigger>
        <AccordionContent className="text-brand-green font-medium text-justify md:text-base lg:text-lg">
          <div className="space-y-4">
            <div>
              <h5 className="font-normal pb-2">Sobre o conteúdo:</h5>
              <p>
                Apresentará as Rosas do Deserto, destacando suas características e origens. Ela
                compartilhará sua jornada pessoal, desde o início da paixão pela coleção até o
                domínio do cultivo. O encontro também cobrirá os cuidados básicos necessários,
                como rega, substrato e adubação. Além disso, Agta mostrará técnicas criativas
                como enxertos e poda radical, e discutirá como essas práticas podem gerar renda
                extra.
              </p>
            </div>
            <div>
              <h5 className="font-normal pb-2">Sobre o autor:</h5>
              <p>
                Agta Roberta é colecionadora de Rosas do Deserto há 8 anos. Após enfrentar diversas 
                dificuldades no cultivo, desenvolveu métodos simples e eficazes para cuidar das plantas
                sem recorrer a produtos químicos. Além disso, realiza enxertos e criações artísticas
                nas plantas, transformando-as em peças únicas e admiráveis.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
  