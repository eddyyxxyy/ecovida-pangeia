import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
import { CaretSortIcon, CheckCircledIcon } from "@radix-ui/react-icons";

export const CollapsiblePillars = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full"
    >
      <details open>
        <summary className="text-brand-orange flex items-center justify-between pb-4 border-b border-brand-orange mb-4">
          <span className="font-semibold uppercase md:text-2xl">
            Mais pilares do nosso projeto
          </span>
          <CollapsibleTrigger asChild>
            <Button variant="brand-orange" size="sm">
              <CaretSortIcon className="size-6" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </summary>
        <CollapsibleContent>
          <ul className="grid gap-2 md:grid-cols-2 md:text-lg">
            <li
              className="flex justify-start items-center gap-4 bg-brand-orange text-white font-bold border p-2 rounded-lg"
            >
              <CheckCircledIcon className="size-6" /> Sustentabilidade
            </li>
            <li
              className="flex justify-start items-center gap-4 bg-brand-orange text-white font-bold border p-2 rounded-lg"
            >
              <CheckCircledIcon className="size-6" /> Agricultura Regenerativa
            </li>
            <li
              className="flex justify-start items-center gap-4 bg-brand-orange text-white font-bold border p-2 rounded-lg"
            >
              <CheckCircledIcon className="size-6" /> Bioconstrução
            </li>
            <li
              className="flex justify-start items-center gap-4 bg-brand-orange text-white font-bold border p-2 rounded-lg"
            >
              <CheckCircledIcon className="size-6" /> Ecovilas
            </li>
            <li
              className="flex justify-start items-center gap-4 bg-brand-orange text-white font-bold border p-2 rounded-lg"
            >
              <CheckCircledIcon className="size-6" /> Transição Planetária
            </li>
            <li
              className="flex justify-start items-center gap-4 bg-brand-orange text-white font-bold border p-2 rounded-lg"
            >
              <CheckCircledIcon className="size-6" /> Despertar da Consciência
            </li>
          </ul>
        </CollapsibleContent>
      </details>
    </Collapsible>
  );
};
