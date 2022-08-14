import Image from "./Image";
import Title from "./Title";
import Objective from "./Objective";

export default function Bio () {
  return (
    <div className={`flex flex-col justify-between items-center w-full md:flex-row`}>
      <Image />
      <div className={`border-2 rounded-md flex flex-col justify-between items-center w-full md:h-40 md:w-4/5`}>
        <Title />
        <Objective />
      </div>
    </div>
  );
}