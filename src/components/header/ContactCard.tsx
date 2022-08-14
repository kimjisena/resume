import { ReactElement } from "react";
import { IconType } from "react-icons";

export type Props = {
  id: string,
  Icon: IconType,
  text: string
};

export default function ContactCard ({ Icon, text, id }: Props): ReactElement {
  let content;
  switch(id) {
    case 'tel':
      content = <a href={`tel:${text}`}>{text}</a>;
      break;
    case 'email':
      content = <a href={`mailto:${text}`}>{text}</a>;
      break;
    case 'twitter':
      content = <a href={`https://twitter.com/${text}`}>{`/${text}`}</a>;
      break;
    case 'github':
      content = <a href={`https://github.com/${text}`}>{`/${text}`}</a>;
      break;
    case 'fcc':
      content = <a href={`https://freecodecamp.org/${text}`}>{`/${text}`}</a>;
      break;
    default:
      content = text;

  }
  return (
    <li className={`flex flex-row items-center bg-light-green w-full p-2 ${id === 'email' ? 'md:mb-0' : '' }  ${id !== 'fcc' ? 'mb-1' : '' } rounded-md`}>
      <Icon className={`text-dark-blue `} size={`24px`} />
      <p className={`text-lg text-dark-blue font-bold ml-2`}>
        {content}
      </p>
    </li>
  );
}