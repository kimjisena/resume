import { ReactElement } from "react";

export default function Contact (): ReactElement {
  return (
    <div className={`rounded-md w-full mb-1 bg-light-green text-dark-blue p-2`}>
      <ul>
          <li>
            <address>
              41119 Dodoma CBD, <br /> Dodoma, Tanzania.
            </address>
          </li>
          <li>phone</li>
          <li>email</li>
          <li>github</li>
          <li>twitter</li>
      </ul>
    </div>
  );
}