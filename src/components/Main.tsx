import { ReactElement } from "react";
import { IoLanguage } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { MdSchool } from "react-icons/md";
import SectionHeader from "./main/SectionHeader";

export default function Main (): ReactElement {
  return (
    <main className={`flex flex-col justify-between my-2 px-4`}>
      <section>
        <SectionHeader Icon={FaTools} text={`Skills`} />
      </section>
      <section>
        <SectionHeader Icon={MdWork} text={`Experience`} />
      </section>
      <section>
        <SectionHeader Icon={TbCertificate} text={`Certification`} />
      </section>
      <section>
        <SectionHeader Icon={MdSchool} text={`Education`} />
      </section>
      <section>
        <SectionHeader Icon={IoLanguage} text={`Languages`} />
      </section>
    </main>
  );
}