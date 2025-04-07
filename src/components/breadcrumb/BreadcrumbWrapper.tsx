"use client";

import { capitalize } from "@/lib/utils/format";
import { usePathname, useRouter } from "next/navigation";
import React, { JSX, useMemo } from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { TbSlashes } from "react-icons/tb";
import useSmallScreen from "@/lib/utils/screens/useSmallScreen";

/**
 * A static breadcrumb navigation component that displays the current path hierarchy.
 *
 * The component adapts its display based on screen size:
 * - On small screens, it shows only the home and current page with "..." for intermediate paths
 * - On larger screens, it shows the complete path hierarchy
 *
 * Features:
 * - Responsive design with different layouts for small and large screens
 * - Automatic path segment capitalization
 * - Navigation links for each breadcrumb segment
 * - Slash separators between segments
 *
 * @returns {JSX.Element | null} The rendered breadcrumb navigation component, or null if on homepage
 *
 * @example
 * // Will render a breadcrumb like: Home / Page / Subpage
 * <StaticBreadcrumb />
 */
const StaticBreadcrumb: React.FC = (): JSX.Element | null => {
  const isSmallScreen = useSmallScreen();
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = useMemo(
    () =>
      pathname
        .split("/")
        .filter(Boolean)
        .map((segment) => decodeURIComponent(segment)), // Decode special characters
    [pathname]
  );

  const capitalizedSegments = useMemo(
    () => pathSegments.map((segment) => capitalize(segment)),
    [pathSegments]
  );

  const breadcrumbItems = useMemo(() => {
    if (pathname === "/") return null;

    const items: React.JSX.Element[] = [];

    items.push(
      <BreadcrumbItem key="home" className="mx-1">
        <BreadcrumbLink
          href="/"
          className="px-1 py-1 rounded-md text-primary dark:text-foreground underline-offset-4 hover:underline"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
    );

    if (isSmallScreen) {
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

      if (pathSegments.length > 0) {
        const firstHref = `/${pathSegments[0]}`;
        const firstSegment = capitalizedSegments[0];

        items.push(
          <BreadcrumbSeparator key={`sep-${firstHref}`} className="mr-0 ml-1">
            <TbSlashes />
          </BreadcrumbSeparator>
        );

        items.push(
          <BreadcrumbItem key={firstHref} className="mx-1">
            <BreadcrumbLink
              href={firstHref}
              className="py-1 rounded-md text-primary dark:text-foreground underline-offset-4 hover:underline"
            >
              {firstSegment}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      }

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
            className="py-1 rounded-md text-primary dark:text-foreground underline-offset-4 hover:underline"
          >
            {currentSegment}
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    } else {
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
              className="py-1 rounded-md text-primary dark:text-foreground underline-offset-4 hover:underline"
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
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-11/12">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-row items-center gap-2 w-full text-sm"
      >
        <ul className="flex flex-row items-center gap-2 px-4 text-secondary">
          {breadcrumbItems}
        </ul>
      </nav>
    </div>
  );
};

export default StaticBreadcrumb;
