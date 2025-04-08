"use client";

import { capitalize } from "@/lib/utils/format";
import useMediumScreen from "@/lib/utils/screens/useMediumScreen";
import useSmallScreen from "@/lib/utils/screens/useSmallScreen";
import { usePathname, useRouter } from "next/navigation";
import React, { JSX, useMemo } from "react";
import { TbSlashes } from "react-icons/tb";
import ResponsiveLogo from "../images/ResponsiveLogo";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

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
  const isMediumScreen = useMediumScreen();
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

  /**
   * Generates breadcrumb items for navigation based on the current URL path and screen size.
   *
   * @returns {React.JSX.Element[] | null} An array of JSX elements representing breadcrumb items or null if at root path
   *
   * The function implements responsive behavior:
   * - On small screens: Shows ellipsis (...) and only the current page segment
   * - On medium screens: Shows "Home", ellipsis, and the current segment or segment hierarchy with limited depth
   * - On large screens: Shows complete path hierarchy from Home to current page
   *
   * Each breadcrumb item includes:
   * - A link to the corresponding path
   * - Visual separators (slashes) between items
   * - Proper styling for interactive elements
   *
   * Dependencies:
   * - pathname: Current URL path
   * - capitalizedSegments: Path segments with capitalized first letters
   * - pathSegments: Raw path segments
   * - isSmallScreen: Boolean indicating if viewport is small
   */
  const breadcrumbItems = useMemo(() => {
    if (pathname === "/") return null;

    const items: React.JSX.Element[] = [];

    if (isSmallScreen) {
      items.push(
        <BreadcrumbItem key="dots" className="-mx-1">
          <span className="rounded-md">...</span>
        </BreadcrumbItem>
      );

      const currentHref = `/${pathSegments.join("/")}`;
      const currentSegment = capitalizedSegments[pathSegments.length - 1];

      items.push(
        <BreadcrumbSeparator
          key={`sep-${currentHref}-${currentSegment}`}
          className="mr-0 ml-1"
        >
          <TbSlashes />
        </BreadcrumbSeparator>
      );

      items.push(
        <BreadcrumbItem
          key={`${currentHref}-${currentSegment}`}
          className="mx-1"
        >
          <BreadcrumbLink
            href={currentHref}
            className="py-1 rounded-md text-primary dark:text-foreground underline-offset-4 hover:underline"
          >
            {currentSegment}
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    } else if (isMediumScreen && !isSmallScreen) {
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

      if (pathSegments.length > 0) {
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

      if (pathSegments.length > 1) {
        items.push(
          <BreadcrumbSeparator key="sep-dots-second" className="mr-0 ml-0">
            <TbSlashes />
          </BreadcrumbSeparator>
        );

        items.push(
          <BreadcrumbItem key="dots-second" className="-mx-1">
            <span className="rounded-md">...</span>
          </BreadcrumbItem>
        );
      }

      if (pathSegments.length > 2) {
        const secondHref = `/${pathSegments.slice(0, 2).join("/")}`;
        const secondSegment = capitalizedSegments[1];

        items.push(
          <BreadcrumbSeparator
            key={`sep-${secondHref}-${secondSegment}`}
            className="mr-0 ml-1"
          >
            <TbSlashes />
          </BreadcrumbSeparator>
        );

        items.push(
          <BreadcrumbItem
            key={`${secondHref}-${secondSegment}`}
            className="mx-1"
          >
            <BreadcrumbLink
              href={secondHref}
              className="py-1 rounded-md text-primary dark:text-foreground underline-offset-4 hover:underline"
            >
              {secondSegment}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      }

      if (pathSegments.length > 4) {
        pathSegments.slice(3).forEach((_, index) => {
          const href = `/${pathSegments.slice(0, 3 + index + 1).join("/")}`;
          const segment = capitalizedSegments[3 + index];

          items.push(
            <BreadcrumbSeparator key={`sep-${href}`} className="mr-0 ml-1">
              <TbSlashes />
            </BreadcrumbSeparator>
          );

          items.push(
            <BreadcrumbItem key={`${href}-${segment}`} className="mx-1">
              <BreadcrumbLink
                href={href}
                className="py-1 rounded-md text-primary dark:text-foreground underline-offset-4 hover:underline"
              >
                {segment}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        });
      }
    } else {
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

      pathSegments.forEach((_, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const capitalizedSegment = capitalizedSegments[index];

        items.push(
          <BreadcrumbSeparator key={`sep-${href}`} className="mr-0 ml-4">
            <TbSlashes />
          </BreadcrumbSeparator>
        );

        items.push(
          <BreadcrumbItem
            key={`${href}-${capitalizedSegment}`}
            className="mx-1"
          >
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
      <ResponsiveLogo className="md:hidden" />
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
