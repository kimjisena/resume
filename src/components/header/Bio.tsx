import { ReactElement } from "react";
import Image from "./Image";
import Title from "./Title";

export default function Bio (): ReactElement {
  return (
    <div className={`flex flex-col justify-between items-center w-full md:flex-row`}>
      <Image />
      <div className={`flex flex-col justify-center items-center w-full md:h-40 md:w-4/5`}>
        <Title />
      </div>
    </div>
  );
}