import { ReactElement } from "react";
import { IoLanguage } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { MdSchool } from "react-icons/md";
import Section from "./main/Section";
import Certification from "./main/Certification";
import Education from "./main/Education";

export default function Main (): ReactElement {
  return (
    <main className={`flex flex-col justify-between my-2 px-4`}>
      <Section text={`Skills`} Icon={FaTools}>
        <div>Skills</div>
      </Section>
      <Section text={`Experience`} Icon={MdWork}>
        <div>Experience</div>
      </Section>
      <Section text={`Certification`} Icon={TbCertificate}>
        <Certification />
      </Section>
      <Section text={`Education`} Icon={MdSchool}>
        <Education />
      </Section>
      <Section text={`Languages`} Icon={IoLanguage}>
        <div>Languages</div>
      </Section>
    </main>
  );
}