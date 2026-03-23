import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <Select
      value={location}
      onValueChange={(value) => value && setLocation(value)}
    >
      <SelectTrigger className="w-full xs:w-45">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="relative z-1001">
        <SelectGroup>
          {location === "custom" && (
            <SelectItem value="custom">Custom</SelectItem>
          )}
          {locations.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const locations = [
  "Bangkok",
  "Tokyo",
  "Seoul",
  "Dubai",
  "Manila",
  "London",
  "New York",
  "Paris",
  "Berlin",
  "Madrid",
  "Rome",
  "Lisbon",
];
