import { ReactElement } from "react";
import { IoLanguage } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { MdSchool } from "react-icons/md";
import Section from "./main/Section";

export default function Main (): ReactElement {
  return (
    <main className={`flex flex-col justify-between my-2 px-4`}>
      <Section text={`Skills`} Icon={FaTools} />
      <Section text={`Experience`} Icon={MdWork} />
      <Section text={`Certification`} Icon={TbCertificate} />
      <Section text={`Education`} Icon={MdSchool} />
      <Section text={`Languages`} Icon={IoLanguage} />
    </main>
  );
}