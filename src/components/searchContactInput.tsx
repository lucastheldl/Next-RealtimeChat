import {
  Input,
  OptBtn,
  SearchContainer,
} from "@/styles/components/searchContactInput";
import { MoreVertical } from "lucide-react";

interface SearchContactInputProps {
  handleShowOptions: () => void;
}
export function SearchContactInput({
  handleShowOptions,
}: SearchContactInputProps) {
  return (
    <SearchContainer>
      <OptBtn>
        <MoreVertical onClick={handleShowOptions} width={32} height={32} />
      </OptBtn>

      <Input />
    </SearchContainer>
  );
}
