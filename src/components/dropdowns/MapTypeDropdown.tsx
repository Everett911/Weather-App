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
  mapType: string;
  setMapType: Dispatch<SetStateAction<string>>;
};

export default function MapTypeDropdown({ mapType, setMapType }: Props) {
  return (
    <Select
      value={mapType}
      onValueChange={(value) => value && setMapType(value)}
    >
      <SelectTrigger className="w-full xs:w-45">
        <SelectValue className="capitalize">
          {mapType.split("_new")[0]}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className=" z-1001">
        <SelectGroup>
          {types.map((layer) => (
            <SelectItem key={layer} value={layer} className="capitalize">
              {layer.split("_new")[0]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const types = [
  "clouds_new",
  "precipitation_new",
  "pressure_new",
  "wind_new",
  "temp_new",
];
