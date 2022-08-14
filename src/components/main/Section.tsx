import { ReactElement } from "react";
import SectionHeader from './SectionHeader';
import { IconProps } from "../types";                                                              

export default function Section ({text, Icon}: IconProps): ReactElement {
    return (
      <section id={text} className={`bg-[whitesmoke] mb-2 pb-2 rounded-b-md`}>
        <SectionHeader Icon={Icon} text={text} />
      </section>
    );
  }