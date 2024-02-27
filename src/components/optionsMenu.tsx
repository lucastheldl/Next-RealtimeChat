import { OptionsContainer, Option } from "@/styles/components/optionsMenu";

import { useState } from "react";

interface OptionsMenuProps {
  state: "OPEN" | "CLOSED";
}
export function OptionsMenu({ state }: OptionsMenuProps) {
  return (
    <OptionsContainer state={state}>
      <Option href={"/settings"}>Configurações</Option>
    </OptionsContainer>
  );
}
