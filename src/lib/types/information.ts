import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons/lib";

export type programInfo = {
  title: string;
  image: string;
  icons:
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >[]
    | IconType[];
  description: string;
  overview: string;
  keypoints: string[];
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
