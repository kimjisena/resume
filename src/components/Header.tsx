import Image from "./Image";
import Title from "./Title";
import Objective from "./Objective";
import Contact from "./Contact";

export default function Header () {
  return (
    <header className={`border-2 flex flex-col justify-between items-center`}>
      <Image />
      <Title />
      <Objective />
      <Contact />
    </header>
  );
}