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

export type StudentProject = {
  title: string;
  author: string;
  date: string;
  description: string;
  preview?: string;
  images?: string[];
};
