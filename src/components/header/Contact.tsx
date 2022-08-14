import { ReactElement } from "react";
import ContactCard, {type Props} from "./ContactCard";
import {BsGithub, BsTwitter, BsFillTelephoneFill} from "react-icons/bs";
import {MdEmail, MdLocationPin} from "react-icons/md";
import {FaFreeCodeCamp} from "react-icons/fa";

const contactDetails: ({ id: string } & Props)[] = [
  {
    id: 'location',
    Icon: MdLocationPin,
    text: '41119 Dodoma, Tanzania',
  },
  {
    id: 'phone',
    Icon: BsFillTelephoneFill,
    text: '+255 789 723 254',
  },
  {
    id: 'email',
    Icon: MdEmail,
    text: 'ponsianojohn99@gmail.com',
  },
  {
    id: 'github',
    Icon: BsGithub,
    text: '@kimjisena',
  },
  {
    id: 'twitter',
    Icon: BsTwitter,
    text: '@kimjisena',
  },
  {
    id: 'freecodecamp',
    Icon: FaFreeCodeCamp,
    text: '@kimjisena'
  }
];

export default function Contact (): ReactElement {
  return (
    <>
    <div className={`rounded-md w-full text-dark-blue py-2`}>
      <ul className={`flex flex-col items-start`}>
          {contactDetails.map((e, i) => {
            if (i < 3) {
              return (<ContactCard key={e.id} Icon={e.Icon} text={e.text} />);
            }
            return null;
          })}
      </ul>
      <ul className={`flex flex-col items-start`}>
          {contactDetails.map((e, i)=> {
            if (i > 2) {
              return (<ContactCard key={e.id} Icon={e.Icon} text={e.text} />);
            }
            return null;
          })}
      </ul>
    </div>
    <hr className={`border-light-green border-2 w-full`} />
    </>
  );
}