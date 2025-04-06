import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md"; // Import the new icon
import { DynamicButtonProps } from "@/lib/types/types";
import { Button } from "../ui/button";

/**
 * A dynamic button component that can display children and an icon with hover effects
 * @component
 * @param {Object} props - The component props
 * @param {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'} [props.variant='default'] - The button variant style
 * @param {React.ReactNode} props.children - The content to display inside the button
 * @param {IconType} [props.icon=LuArrowBigRightDash] - The icon component to render
 * @param {'left' | 'right' | 'top' | 'bottom'} [props.iconPosition='right'] - The position of the icon relative to the content
 * @param {'translate' | 'rotate' | 'scale'} [props.hoverEffect='translate'] - The hover effect applied to the icon
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Click event handler
 * @param {string} [props.className] - Additional CSS classes for the button
 * @param {string} [props.iconClassName] - Additional CSS classes for the icon wrapper
 * @returns {JSX.Element} A Button component with children and optional icon
 */
export default function DynamicButton({
  variant = "default",
  children,
  icon: Icon = variant === "link" ? MdArrowOutward : LuArrowBigRightDash,
  iconPosition = "right",
  hoverEffect = "translate",
  onClick,
  className,
  iconClassName,
}: Omit<DynamicButtonProps, "text"> & {
  children: React.ReactNode;
  iconPosition?: "left" | "right" | "top" | "bottom";
  hoverEffect?: "translate" | "rotate" | "scale";
}): JSX.Element {
  const iconPositionClasses = {
    left: "flex-row-reverse",
    right: "flex-row",
    top: "flex-col-reverse",
    bottom: "flex-col",
  };

  const hoverEffectClasses = {
    translate: "group-hover:translate-x-2",
    rotate: "group-hover:rotate-45",
    scale: "group-hover:scale-110",
  };

  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={cn(
        "mt-2 group w-1/2 gap-0 flex",
        {
          "inline w-fit p-0 m-0": variant === "link",
        },
        iconPositionClasses[iconPosition],
        className
      )}
    >
      <span className="pl-5">{children}</span>
      {Icon && (
        <span
          className={cn(
            "inline-block px-5 transition-transform duration-300 ease-in-out",
            {
              "group-hover:translate-x-2 group-hover:-translate-y-2 pl-1":
                variant === "link",
            },
            hoverEffectClasses[hoverEffect],
            iconClassName
          )}
        >
          <Icon className="w-4 h-4" />
        </span>
      )}
    </Button>
  );
}
