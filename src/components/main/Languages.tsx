import { ReactElement } from "react";
import LanguageLevel from "./LanguageLevel";

export default function Languages (): ReactElement {
  return (
    <ul>
      <li className={`flex flex-row items-center text-lg p-2`}>
        <p className={`w-[30%] md:w-1/5`}>Sukuma</p>
        <LanguageLevel level={4} />
      </li>
      <li className={`flex flex-row items-center text-lg p-2`}>
        <p className={`w-[30%] md:w-1/5`}>Swahili</p>
        <LanguageLevel level={4} />
      </li>
      <li className={`flex flex-row items-center text-lg p-2`}>
        <p className={`w-[30%] md:w-1/5`}>English</p>
        <LanguageLevel level={3} />
      </li>
      <li className={`flex flex-row items-center text-lg p-2`}>
        <p className={`w-[30%] md:w-1/5`}>Spanish</p>
        <LanguageLevel level={2} />
      </li>
    </ul>
  );
}