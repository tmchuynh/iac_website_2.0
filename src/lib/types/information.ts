import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons/lib";
import { programIcons } from "../constants/programs"; // Import the programIcons array
import { LucideProps } from "lucide-react";

export type programInfo = {
  title: string;
  image: string;
  titleIcon: string;
  icons: (typeof programIcons)[number]["icon"][]; // Use the type of icons from programIcons
  description: string;
  overview: string;
  keypoints: {
    title: string;
    description: string;
  }[];
  outcome: string;
  goal: string;
  images: string[];
};

export type showcaseInfo = {
  subject: string;
  works: Work[];
};

export type Work = {
  title: string;
  author: string;
  date: string;
  school: string;
  grade: string;
  mainImage: string;
  description: string;
  preview?: string;
  writing?: string;
  images?: string[];
};

export type staffInfo = {
  category: string;
  members: {
    name: string;
    role: string;
    bio?: string;
    image: string;
    icons?:
      | ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >[]
      | IconType[];
    moreInfo?: {
      text: string;
      images: string[];
      email?: string;
      phone?: string;
    };
  }[];
};
