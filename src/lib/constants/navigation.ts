import {
  FaBook,
  FaChalkboardTeacher,
  FaFileAlt,
  FaFlag,
  FaSchool,
  FaTrophy,
} from "react-icons/fa";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { MdMarkEmailRead } from "react-icons/md";

export const about = [
  {
    name: "Our Story",
    href: "/about_us",
    description: "Learn about the history and foundation of our program.",
    icon: FaBook,
  },
  {
    name: "Our Commitment",
    href: "/about_us/our_commitment",
    description: "Discover our dedication to providing high-quality education.",
    icon: FaFlag,
  },
  {
    name: "The Mission",
    href: "/about_us/our_mission",
    description: "Understand the core purpose and values driving our work.",
    icon: FaTrophy,
  },
];

export const programs = [
  {
    name: "Program Overview",
    href: "/programs",
    description: "Explore the programs we offer and how they benefit students.",
    icon: FaFileAlt,
  },
  {
    name: "Partnering Schools",
    href: "/programs/school_information",
    description:
      "Find out about the schools we partner with to deliver our programs.",
    icon: FaSchool,
  },
  {
    name: "Frequently Asked Questions",
    href: "/programs/frequently_asked_questions",
    description: "Find answers to common questions about our programs.",
    icon: FaChalkboardTeacher,
  },
  {
    name: "Testimonials",
    href: "/programs/testimonials",
    description: "Read testimonials from our students and partners.",
    icon: FaChalkboardTeacher,
  },
];

export const contact = [
  {
    name: "Request IAC at Your School",
    href: "/contact_us/request_us",
    description: "Learn how to bring our programs to your school.",
    icon: HiMiniInboxArrowDown,
  },
  {
    name: "Apply to Work With Us",
    href: "/contact_us/apply",
    description: "Join our team and make an impact on students' lives.",
    icon: FaChalkboardTeacher,
  },
  {
    name: "Contact Us",
    href: "/contact_us",
    description: "Get in touch with us for any questions or information.",
    icon: MdMarkEmailRead,
  },
];

export const aboutFeaturedLinks = [
  {
    id: 1,
    title: "The Staff Behind The Curtains",
    href: "/about_us/our_staff",
    imageUrl: "/images/purple_logo_with_background.png",
    description:
      "Meet the dedicated staff who ensure the success of our programs, working behind the scenes to support student growth.",
  },
];

export const programsFeaturedLinks = [
  {
    id: 3,
    title: "The Students' Projects Throughout Their Journey",
    href: "/programs/student_showcase",
    imageUrl: "/images/Class_Photos/Comic_Book/3659482_665914.jpg",
    description:
      "Explore the innovative projects students create, showcasing their skills and creativity throughout their learning journey.",
  },
];

export const contactFeaturedLinks = [
  {
    id: 4,
    title: "Register For A Class",
    href: "/contact_us/register",
    imageUrl: "/images/Class_Photos/Chess/30990092_141562.jpg",
    description: "Sign up for classes and start your learning journey",
  },
  {
    id: 5,
    title: "Provide Us Feedback",
    href: "/contact_us/provide_feedback",
    imageUrl: "/images/Class_Photos/Chess/30995092_141166.jpg",
    description: "Share your thoughts and suggestions with us.",
  },
];
