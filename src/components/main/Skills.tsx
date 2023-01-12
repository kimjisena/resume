import { ReactElement } from "react";


export default function Skills (): ReactElement {
  return (
    <div className={`p-2 text-dark-blue`}>
      <div>
        <h2 className={`text-2xl`}>Technical Skills</h2>
        <div id="technical-skills" className={`md:grid md:grid-cols-3 md:gap-3`}>
        <div id="programming-languages">
          <h3 className={`text-xl p-2 font-bold`}>Programming Languages</h3>
          <ul className={`list-disc list-outside text-lg pl-4`}>
            <li className={`ml-2 py-2 pr-2`}>JavaScript</li>
            <li className={`ml-2 py-2 pr-2`}>TypeScript</li>
            <li className={`ml-2 py-2 pr-2`}>Python</li>
            <li className={`ml-2 py-2 pr-2`}>PHP</li>
          </ul>
        </div>

        <div id="libraries-and-frameworks">
          <h3 className={`text-xl p-2 font-bold`}>Libaries and Frameworks</h3>
          <ul className={`list-disc list-outside text-lg pl-4`}>
            <li className={`ml-2 py-2 pr-2`}>ReactJS</li>
            <li className={`ml-2 py-2 pr-2`}>NextJS</li>
            <li className={`ml-2 py-2 pr-2`}>Laravel</li>
            <li className={`ml-2 py-2 pr-2`}>Tailwind CSS</li>
          </ul>
        </div>

        <div id="environments-and-tools">
          <h3 className={`text-xl p-2 font-bold`}>Environments and Tools</h3>
          <ul className={`list-disc list-outside text-lg pl-4`}>
            <li className={`ml-2 py-2 pr-2`}>NodeJS</li>
            <li className={`ml-2 py-2 pr-2`}>Bash</li>
            <li className={`ml-2 py-2 pr-2`}>Git</li>
          </ul>
        </div>
        </div>
      </div>

      <div>
        <h2 className={`text-2xl`}>Soft Skills</h2>
        <div id="soft-skills" className={`md:grid md:grid-cols-3 md:gap-3`}>
          <ul className={`list-disc list-outside text-lg pl-4`}>
            <li className={`ml-2 py-2 pr-2`}>Self-directed learning</li>
            <li className={`ml-2 py-2 pr-2`}>Time management</li>
            <li className={`ml-2 py-2 pr-2`}>Organizational skills</li>
          </ul>
          <ul className={`list-disc list-outside text-lg pl-4`}>
            <li className={`ml-2 py-2 pr-2`}>Communication skills</li>
            <li className={`ml-2 py-2 pr-2`}>Teamwork</li>
          </ul>
          <ul className={`list-disc list-outside text-lg pl-4`}>
            <li className={`ml-2 py-2 pr-2`}>Creative thinking</li>
            <li className={`ml-2 py-2 pr-2`}>Problem solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
}