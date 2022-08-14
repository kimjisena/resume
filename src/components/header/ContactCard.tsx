import { ReactElement } from "react";
import { IconType } from "react-icons";

export type Props = {
  Icon: IconType,
  text: string
};

export default function ContactCard ({ Icon, text }: Props): ReactElement {
  return (
    <li className={`flex flex-row items-center bg-light-green w-full p-2 mb-1 rounded-md`}>
      <Icon className={`text-dark-blue `} size={`24px`} />
      <p className={`text-lg text-dark-blue font-bold ml-2`}>
        {text}
      </p>
    </li>
  );
}