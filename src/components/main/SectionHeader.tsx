import React, { ReactElement } from "react";
import { IconProps } from "../types";

export default function SectionHeader ({ Icon, text }: IconProps): ReactElement {
  return (
    <div className={`flex flex-row items-center bg-dark-blue text-[white] w-full p-2 rounded-t-md`}>
      <Icon className={`text-[white]`} size={`28px`} />
      <h1 className={`text-2xl ml-3 font-bold`}>{text}</h1>
    </div>
    );
}