import { ReactElement } from "react";
import { IconType } from "react-icons";

export type IconProps = {
    id?: string,
    Icon: IconType,
    text: string,
};

export type Children = {
    children: ReactElement,
};