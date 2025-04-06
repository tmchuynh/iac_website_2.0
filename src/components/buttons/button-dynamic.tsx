import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import { DynamicButtonProps } from "@/lib/types/types";
import { Button } from "../ui/button";

/**
 * A dynamic button component that can display children and an icon with hover effects
 * @component
 * @param {Object} props - The component props
 * @param {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'} [props.variant='default'] - The button variant style
 * @param {React.ReactNode} props.children - The content to display inside the button
 * @param {IconType} [props.icon=LuArrowBigRightDash] - The icon component to render
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Click event handler
 * @param {string} [props.className] - Additional CSS classes for the button
 * @param {string} [props.iconClassName] - Additional CSS classes for the icon wrapper
 * @returns {JSX.Element} A Button component with children and optional icon
 */
export default function DynamicButton({
  variant = "default",
  children,
  icon: Icon = LuArrowBigRightDash,
  onClick,
  className,
  iconClassName,
}: Omit<DynamicButtonProps, "text"> & {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={cn("mt-2 group w-1/2 gap-0", className)}
    >
      <span className="pl-5">{children}</span>
      {Icon && (
        <span
          className={cn(
            "inline-block px-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2",
            iconClassName
          )}
        >
          <Icon className="w-4 h-4" />
        </span>
      )}
    </Button>
  );
}
