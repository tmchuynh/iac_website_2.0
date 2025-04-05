"use client";

import { capitalize } from "@/lib/utils/format";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { TbSlashes } from "react-icons/tb";
import useSmallScreen from "@/lib/utils/screens/useSmallScreen";

const StaticBreadcrumb: React.FC = () => {
  const isSmallScreen = useSmallScreen();
  const pathname = usePathname();
  const router = useRouter();

  // Compute the path segments and their capitalized versions
  const pathSegments = useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname]
  );

  const capitalizedSegments = useMemo(
    () => pathSegments.map((segment) => capitalize(segment)),
    [pathSegments]
  );

  // Compute breadcrumb items without side effects
  const breadcrumbItems = useMemo(() => {
    if (pathname === "/") return null;

    const items: React.JSX.Element[] = [];

    // Home link
    items.push(
      <BreadcrumbItem key="home" className="mx-1">
        <BreadcrumbLink
          href="/"
          className="px-1 py-1 rounded-md text-primary underline-offset-4 hover:underline"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
    );

    if (isSmallScreen) {
      // Show "..." for middle pages on small screens
      if (pathSegments.length > 1) {
        items.push(
          <BreadcrumbSeparator key="sep-dots" className="mr-0 ml-0">
            <TbSlashes />
          </BreadcrumbSeparator>
        );
        items.push(
          <BreadcrumbItem key="dots" className="-mx-1">
            <span className="rounded-md">...</span>
          </BreadcrumbItem>
        );
      }

      // Add the current page
      const currentHref = `/${pathSegments.join("/")}`;
      const currentSegment = capitalizedSegments[pathSegments.length - 1];

      items.push(
        <BreadcrumbSeparator key={`sep-${currentHref}`} className="mr-0 ml-1">
          <TbSlashes />
        </BreadcrumbSeparator>
      );

      items.push(
        <BreadcrumbItem key={currentHref} className="mx-1">
          <BreadcrumbLink
            href={currentHref}
            className="py-1 rounded-md text-primary underline-offset-4 hover:underline"
          >
            {currentSegment}
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    } else {
      // Handle dynamic paths for larger screens
      pathSegments.forEach((_, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const capitalizedSegment = capitalizedSegments[index];

        items.push(
          <BreadcrumbSeparator key={`sep-${href}`} className="mr-0 ml-4">
            <TbSlashes />
          </BreadcrumbSeparator>
        );

        items.push(
          <BreadcrumbItem key={href}>
            <BreadcrumbLink
              href={href}
              className="py-1 rounded-md text-primary underline-offset-4 hover:underline"
            >
              {capitalizedSegment}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      });
    }

    return items;
  }, [pathname, capitalizedSegments, pathSegments, router, isSmallScreen]);

  if (!breadcrumbItems) return null;

  return (
    <div className="mx-auto px-1 md:px-6 lg:px-5 pt-3 md:pt-5 w-full">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-row items-center gap-2 w-full text-sm"
      >
        <ul className="flex flex-row items-center gap-2 px-4">
          {breadcrumbItems}
        </ul>
      </nav>
    </div>
  );
};

export default StaticBreadcrumb;
