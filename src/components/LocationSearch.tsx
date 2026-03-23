import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Search from "../assets/search.svg?react";
import { useState, type Dispatch } from "react";

type Props = {
  setLocation: Dispatch<React.SetStateAction<string>>;
};

export default function LocationSearch({ setLocation }: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = () => {
    setLocation(inputValue);
  };
  return (
    <Field className="xs:w-45">
      <ButtonGroup>
        <Input
          id="input-button-group"
          placeholder="Search City..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="outline" type="submit" onClick={handleSubmit}>
          <Search />
        </Button>
      </ButtonGroup>
    </Field>
  );
}
