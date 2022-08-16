import { ReactElement } from "react";
import { TbExternalLink } from "react-icons/tb";


export default function Experience (): ReactElement {
  return (
    <div className={`p-2 text-dark-blue`}>
      <div>
        <h2 className={`text-2xl`}>Open Source Contibutor</h2>
        <p className={`text-lg p-2`}>June 2022 - Present</p>
        <a href="https://github.com/users/kimjisena/achievements/pull-shark">
          <p className={`flex flex-row items-center text-lg p-2`}>
            NodeJs
            <TbExternalLink className={`text-dark-blue ml-2`} size={`24px`} />
          </p>
        </a>
        <ul className={`list-disc list-outside text-lg pl-8`}>
          <li className={`ml-2 py-2 pr-2`}>Submitted pull requests to NodeJS that assisted in improving the NodeJS documentation</li>
        </ul>
      </div>

      <div>
        <h2 className={`text-2xl`}>Independent Programmer</h2>
        <p className={`text-lg p-2`}>April 2021 - Present</p>
        <a href="https://github.com/kimjisena/fcc-certs">
          <p className={`flex flex-row items-center text-lg p-2`}>
            GitHub
            <TbExternalLink className={`text-dark-blue ml-2`} size={`24px`} />
          </p>
        </a>
        <ul className={`list-disc list-outside text-lg pl-8`}>
          <li className={`ml-2 py-2 pr-2`}>Built and deployed a 25 + 5 pomodoro clock</li>
          <li className={`ml-2 py-2 pr-2`}>Built and deployed a CASIO fx-991ms-themed JavaScript calculator</li>
          <li className={`ml-2 py-2 pr-2`}>Built and deployed a drum pad machine with extensive focus on the UI</li>
          <li className={`ml-2 py-2 pr-2`}>Built and deployed a markdown previewer</li>
          <li className={`ml-2 py-2 pr-2`}>Built and deployed a linux terminal-themed random quote generator</li>
        </ul>
      </div>
    </div>
  );
}