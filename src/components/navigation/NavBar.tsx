"use client";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  about,
  contact,
  featuredLinks,
  programs,
} from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";
import useSmallScreen from "@/lib/utils/screens/useSmallScreen";
import { ThemeToggle } from "../buttons/ThemeToggle";
import DockNavigation from "./DockNavigation";

export function NavBar() {
  const isSmallScreen = useSmallScreen();

  return (
    <>
      {isSmallScreen ? (
        <DockNavigation />
      ) : (
        <div className="bg-primary py-5">
          <div className="flex mx-auto w-11/12 text-primary-foreground">
            <div className="flex justify-between items-center mx-auto w-11/12 text-white">
              International Activities Club
            </div>

            <NavigationMenu className="flex justify-center mx-auto w-full text-white">
              <NavigationMenuList>
                <NavigationMenuItem className="p-4">
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About IAC</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid lg:grid-cols-3 p-4 md:w-[35em] lg:w-[45em]">
                      {featuredLinks.map((link, index) => (
                        <li className="col-span-1 row-span-3 m-0" key={index}>
                          <NavigationMenuLink
                            className="relative flex flex-col justify-end bg-cover bg-center focus:shadow-md p-6 rounded-md w-full h-full no-underline select-none outline-none"
                            href={`${link.href}`}
                            style={{
                              backgroundImage: `url(${link.imageUrl})`,
                            }}
                          >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-background/50 rounded-md"></div>
                            <div className="relative mt-4 mb-2 font-medium text-foreground text-lg">
                              {link.title}
                            </div>
                            <p className="relative text-foreground text-sm leading-tight">
                              {link.description}
                            </p>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      {about.map((link, index) => (
                        <ListItem
                          href={link.href}
                          title={`${link.name}`}
                          key={index}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Programs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid lg:grid-cols-3 p-4 md:w-[35em] lg:w-[45em]">
                      {programs.map((program, index) => (
                        <ListItem
                          key={index}
                          title={program.name}
                          href={program.href}
                        >
                          {program.description}
                        </ListItem>
                      ))}
                      {contact.map((link, index) => (
                        <ListItem
                          href={link.href}
                          title={`${link.name}`}
                          key={index}
                        >
                          {link.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <ThemeToggle />
            </NavigationMenu>
          </div>
        </div>
      )}
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="mx-0">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex flex-col h-full select-none rounded-md p-4 no-underline outline-none transition-colors group hover:bg-secondary hover:text-secondary-foreground focus-visible:ring-ring/50 focus-visible:outline-none focus-visible:ring-[3px] data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-medium text-sm underline-offset-2 group-hover:underline leading-none">
            {title}
          </div>
          <p className="text-sm group-hover:text-background leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
