import { IconType } from "react-icons/lib";

export type Person = {
  name: string;
  role: string;
  image: string;
  description: string;
  icons: IconType[];
};

export type Program = {
  title: string;
  description: string;
  image: string;
};

export type testimonialsInfo = {
  name: string;
  title: string;
  school: string;
  image?: string;
  class: string;
  text: string;
};
