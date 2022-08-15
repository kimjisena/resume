import { ReactElement } from "react";
import { TbExternalLink } from "react-icons/tb";

export default function Certification (): ReactElement {
  return (
  <ul>
    <a href={`https://www.freecodecamp.org/certification/kimjisena/responsive-web-design`}>
      <li className={`flex flex-row items-center text-dark-blue text-lg p-2`}>
        Responsive Web Design 
        <TbExternalLink className={`text-dark-blue ml-2`} size={`24px`} />
      </li>
    </a>

    <a href={`https://www.freecodecamp.org/certification/kimjisena/javascript-algorithms-and-data-structures`}>
      <li className={`flex flex-row items-center text-dark-blue text-lg p-2 md:hidden`}>
        JavaScript DSA
        <TbExternalLink className={`text-dark-blue ml-2`} size={`24px`} />
      </li>
      <li className={`hidden md:flex md:flex-row md:items-center text-dark-blue text-lg p-2`}>
        JavaScript Algorithms and Data Structures
        <TbExternalLink className={`text-dark-blue ml-2`} size={`24px`} />
      </li>
    </a>

    <a href={`https://www.freecodecamp.org/certification/kimjisena/front-end-development-libraries`}>
      <li className={`flex flex-row items-center text-dark-blue text-lg p-2 md:hidden`}>
        Front End Development
        <TbExternalLink className={`text-dark-blue ml-2`} size={`24px`} />
      </li>
      <li className={`hidden md:flex md:flex-row md:items-center text-dark-blue text-lg p-2`}>
        Front End Development Libraries 
        <TbExternalLink className={`text-dark-blue ml-2`} size={`24px`} />
      </li>
    </a>
  </ul>
  );
}