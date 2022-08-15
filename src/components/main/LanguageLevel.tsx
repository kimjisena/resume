import { ReactElement } from "react";


export default function LanguageLevel ({ level }: { level: number }): ReactElement {
  let levels: boolean[];

  switch(level) {
    case 4:
      levels = [true, true, true, true, true];
      break;
    case 3:
      levels = [true, true, true, true, false];
      break;
    case 2:
      levels = [true, true, true, false, false];
      break;
    default:
      levels = [false, false, false, false, false];
      break;
  }

  return (
    <div className={`flex flex-row items-center`}>
      {levels.map((e, i) => {
        return (<div key={i} className={`${e ? 'bg-dark-blue': 'bg-level-green'} w-3 h-3 mr-1`} />);
      })}
    </div>
  );
}