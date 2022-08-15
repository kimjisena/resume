import { ReactElement } from "react";

export default function Education (): ReactElement {
  return (
    <div className={`p-2 text-dark-blue`}>
      <div>
        <h2 className={`text-2xl`}>Doctor of Medicine <span className={`font-bold text-base`}>(Incomplete)</span></h2>
        <p className={`text-lg p-2`}>Nov 2019 - Oct 2021</p>
        <p className={`text-lg p-2`}>University Of Dodoma</p>
      </div>

      <div>
        <h3 className={`text-xl pl-2 font-bold`}>Relevant Courses</h3>
        <ul className={`list-disc list-inside pl-2 text-lg`}>
          <li className={`p-2`}>Health Information Systems</li>
          <li className={`p-2`}>Biostatistics</li>
          <li className={`p-2`}>Communication Skills</li>
          <li className={`p-2`}>Behavioral Sciences</li>
        </ul>
      </div>
    </div>
  );
}