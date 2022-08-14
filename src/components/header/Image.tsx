import { ReactElement } from 'react';
import pfp from '../../images/kim.jpg';

export default function Image (): ReactElement {
  return (
    <div className={`rounded-lg w-36 h-36 md:h-4/5 md:w-[15%] my-1`}>
      <img className={`rounded-lg`} src={pfp} alt="Ponsiano Jisena" />
    </div>
  );
}