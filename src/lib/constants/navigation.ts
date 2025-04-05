import {
  FaBook,
  FaChalkboardTeacher,
  FaFileAlt,
  FaFlag,
  FaSchool,
  FaTrophy,
} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { MdMarkEmailRead } from "react-icons/md";

export const about = [
  { name: "Our Story", href: "/about_us", icon: FaBook },
  { name: "Our Commitment", href: "/about_us/our_commitment", icon: FaFlag },
  { name: "The Mission", href: "/about_us/our_mission", icon: FaTrophy },
];

export const programs = [
  { name: "Program Overview", href: "/programs", icon: FaFileAlt },
  {
    name: "Partnering Schools",
    href: "/programs/school_information",
    icon: FaSchool,
  },
];

export const contact = [
  { name: "Contact Us", href: "/contact_us", icon: MdMarkEmailRead },
  {
    name: "Request IAC at Your School",
    href: "/contact_us/request_us",
    icon: HiMiniInboxArrowDown,
  },
  {
    name: "Register For A Class",
    href: "/contact_us/register",
    icon: FaPencil,
  },
  {
    name: "Apply to Work With Us",
    href: "/contact_us/apply",
    icon: FaChalkboardTeacher,
  },
];

export const recentPosts = [
  {
    id: 1,
    title: "The Staff Behind The Curtains",
    href: "/about_us/our_staff",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    description:
      "Meet the dedicated staff who ensure the success of our programs, working behind the scenes to support student growth.",
  },
  {
    id: 2,
    title: "The Students' Projects Throughout Their Journey",
    href: "/programs/student_showcase",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    description:
      "Explore the innovative projects students create, showcasing their skills and creativity throughout their learning journey.",
  },
];
