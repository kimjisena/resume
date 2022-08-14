import { ReactElement } from "react";
import Bio from "./header/Bio";
import Contact from "./header/Contact";
import Objective from "./header/Objective";

export default function Header (): ReactElement {
  return (
    <header className={`flex flex-col justify-between items-center px-4 pt-4`}>
      <Bio />
      <Objective />
      <hr className={`border-light-green border-2 w-full`} />
      <Contact />
    </header>
  );
}