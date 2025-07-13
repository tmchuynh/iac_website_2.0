"use client";
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
  aboutFeaturedLinks,
  contact,
  contactFeaturedLinks,
  programs,
  programsFeaturedLinks,
} from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";
import useSmallScreen from "@/lib/utils/screens/useSmallScreen";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import DockNavigation from "./DockNavigation";

export function NavBar() {
  const isSmallScreen = useSmallScreen();

  return (
    <>
      {isSmallScreen ? (
        <DockNavigation />
      ) : (
        <div className="bg-navigation py-5">
          <div className="flex mx-auto w-11/12 text-primary-foreground">
            <Image
              src="/images/initials_logo.png"
              alt="IAC intials logo"
              className="object-cover"
              priority
              width={100}
              height={100}
            />

            <NavigationMenu className="flex justify-end w-full font-[LuckiestGuy] text-white">
              <NavigationMenuList>
                <NavigationMenuItem className="mt-2 p-4">
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-lg 2xl:text-2xl xl:text-xl">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About IAC</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid lg:grid-cols-3 lg:grid-rows-3 p-4 md:w-[35em] lg:w-[45em]">
                      {aboutFeaturedLinks.map((link, index) => (
                        <li
                          className="col-span-2 xl:col-span-3 row-span-3 xl:row-span-2 m-0"
                          key={index}
                        >
                          {NavigationImageItem(link)}
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
                  <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid lg:grid-cols-4 lg:grid-rows-2 p-4 md:w-[35em] lg:w-[50em]">
                      {programsFeaturedLinks.map((link, index) => (
                        <li className="col-span-2 row-span-2 m-0" key={index}>
                          {NavigationImageItem(link)}
                        </li>
                      ))}
                      {programs.map((program, index) => (
                        <ListItem
                          key={index}
                          title={program.name}
                          href={program.href}
                        >
                          {program.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="gap-3 grid lg:grid-cols-2 lg:grid-rows-5 p-4 md:w-[35em] lg:w-[45em]">
                      {contactFeaturedLinks.map((link, index) => (
                        <li
                          className="col-span-2 lg:col-span-1 lg:row-span-3 m-0"
                          key={index}
                        >
                          {NavigationImageItem(link)}
                        </li>
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
          <div className="font-medium leading-none text-sm">{title}</div>
          <p className="font-[YanoneKaffeesatz] leading-snug text-sm group-hover:text-background">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function NavigationImageItem(link: {
  id: number;
  title: string;
  href: string;
  imageUrl: string;
  description: string;
}) {
  return (
    <NavigationMenuLink
      className="relative flex flex-col justify-end bg-center bg-cover focus:shadow-md p-6 rounded-md h-full w-full no-underline select-none outline-none"
      href={`${link.href}`}
      style={{
        backgroundImage: `url(${link.imageUrl})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-background/50 rounded-md"></div>
      <div className="relative mb-2 mt-4 font-medium text-foreground text-lg">
        {link.title}
      </div>
      <p className="relative font-[NothingYouCouldDo] leading-tight text-foreground text-sm">
        {link.description}
      </p>
    </NavigationMenuLink>
  );
}
