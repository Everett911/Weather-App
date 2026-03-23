import type { Dispatch } from "react";
import Hamburger from "../assets/hamburger.svg?react";
import LightDarkToggle from "./LightDarkToggle";

type Props = {
  setIsSidePanelOpen: Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileHeader({ setIsSidePanelOpen }: Props) {
  return (
    <div className="w-full h-16 p-4 bg-background sticky top-0 xs:hidden flex justify-end z-1001">
      <div className="mr-5 items-center mt-1">
        <LightDarkToggle />
      </div>
      <div className="mr-4">
        <button onClick={() => setIsSidePanelOpen(true)}>
          <Hamburger className="size-6  " />
        </button>
      </div>
    </div>
  );
}
