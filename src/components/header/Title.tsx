import { ReactElement } from "react";

export default function Title (): ReactElement {
  return (
    <div className={`rounded-md w-full mb-1 p-2 bg-dark-blue text-[white]`}>
      <h1 className={`text-4xl font-bold border-b-2 border-light-green p-2`}>Ponsiano Jisena</h1>
      <h2 className={`text-xl text-dark-grey p-2`}>Frontend Developer</h2>
    </div>
  );
}