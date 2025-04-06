import { IconType } from "react-icons/lib";

export type DynamicButtonProps = {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "secondaryOutline"
    | "secondaryGhost"
    | "secondaryLink"
    | "destructive"
    | "destructiveOutline"
    | "destructiveGhost"
    | "destructiveLink"
    | "ghost"
    | "link";
  text: string;
  icon?: IconType;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};

export type NotFoundContextType = {
  isNotFound: boolean;
  setNotFound: (value: boolean) => void;
};

export type LengthObject = {
  value: number;
  unit: string;
};
