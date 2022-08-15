import { ReactElement } from "react";
import { IoLanguage } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { MdSchool } from "react-icons/md";
import Section from "./main/Section";
import Certification from "./main/Certification";
import Education from "./main/Education";
import Languages from "./main/Languages";
import Experience from "./main/Experience";

export default function Main (): ReactElement {
  return (
    <main className={`flex flex-col justify-between my-2 px-4`}>
      <Section text={`Skills`} Icon={FaTools}>
        <div></div>
      </Section>

      <Section text={`Experience`} Icon={MdWork}>
        <Experience />
      </Section>

      <Section text={`Certification`} Icon={TbCertificate}>
        <Certification />
      </Section>

      <Section text={`Education`} Icon={MdSchool}>
        <Education />
      </Section>
      
      <Section text={`Languages`} Icon={IoLanguage}>
        <Languages />
      </Section>
    </main>
  );
}