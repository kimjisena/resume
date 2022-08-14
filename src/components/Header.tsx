import Bio from "./header/Bio";
import Contact from "./header/Contact";

export default function Header () {
  return (
    <header className={`border-2 flex flex-col justify-between items-center p-1`}>
      <Bio />
      <Contact />
    </header>
  );
}