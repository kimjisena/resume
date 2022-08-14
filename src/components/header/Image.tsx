import { ReactElement } from 'react';
import pfp from '../../images/kim.jpg';

export default function Image (): ReactElement {
  return (
    <div className={`rounded-lg w-36 h-36 md:h-4/5 md:w-[15%] my-2`}>
      <img className={`rounded-2xl border-light-green border-8`} src={pfp} alt="Ponsiano Jisena" />
    </div>
  );
}