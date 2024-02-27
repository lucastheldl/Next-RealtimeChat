import {
  Input,
  OptBtn,
  SearchContainer,
} from "@/styles/components/searchContactInput";
import { MoreVertical } from "lucide-react";

export function SearchContactInput() {
  return (
    <SearchContainer>
      <OptBtn>
        <MoreVertical width={32} height={32} />
      </OptBtn>
      <Input />
    </SearchContainer>
  );
}
