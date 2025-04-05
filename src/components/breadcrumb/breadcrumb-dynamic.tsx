"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { capitalize } from "@/lib/utils/format";
import { usePathname, useRouter } from "next/navigation";
import React, { JSX, useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

/**
 * DynamicBreadcrumb Component
 *
 * A responsive breadcrumb navigation component that dynamically generates
 * breadcrumb items based on the current URL path. The last segment displays
 * a dropdown menu with related subcategories when available.
 *
 * Features:
 * - Automatically parses URL path segments into breadcrumb items
 * - Capitalizes and formats path segments for display
 * - Provides a dropdown menu for the current category showing available subcategories
 * - Handles navigation between related pages
 * - Does not render on the homepage
 *
 * Implementation details:
 * - Uses React hooks (useState, useEffect, useMemo) for state management and performance
 * - Fetches subcategory data from mockProductData based on the current path
 * - Supports dynamic navigation through multiple levels of categories
 * - Applies consistent styling to breadcrumb items
 *
 * @returns {JSX.Element|null} The rendered breadcrumb navigation or null if on homepage
 */
const DynamicBreadcrumb = (): JSX.Element | null => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const pathSegments = useMemo(
    () => pathname.split("/").filter((segment) => segment),
    [pathname]
  );

  const capitalizedSegments = useMemo(
    () => pathSegments.map((segment) => capitalize(segment)),
    [pathSegments]
  );

  const breadcrumbItems = useMemo(() => {
    if (pathname === "/") {
      return null; // Do not render breadcrumb on the homepage
    }

    const items = [
      <BreadcrumbItem key="home">
        <BreadcrumbLink
          href="/"
          className="bg-muted px-3 py-2 rounded-lg cursor-default"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>,
    ];

    pathSegments.forEach((_segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const capitalizedSegment = capitalizedSegments[index];
      const isLast = index === pathSegments.length - 1;

      items.push(
        <React.Fragment key={href}>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {isLast ? (
              // Render dropdown on the last segment
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-muted px-3 py-2 rounded-lg cursor-default border-none"
                  >
                    {capitalizedSegment}
                    <FaChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    {categories.map((item) => (
                      <DropdownMenuItem
                        key={item.href}
                        onClick={() => router.push(item.href)}
                      >
                        {item.name.replaceAll("_", " ")}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <BreadcrumbLink
                href={href}
                className="bg-muted px-3 py-2 rounded-lg cursor-default"
              >
                {capitalizedSegment}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        </React.Fragment>
      );
    });

    return items;
  }, [pathname, capitalizedSegments, pathSegments, categories, router]);

  if (breadcrumbItems === null) {
    return null;
  }

  return (
    <Breadcrumb className="mx-auto pt-9 z-30 w-full flex flex-row md:w-11/12">
      <BreadcrumbList className="flex flex-row items-center w-11/12 mx-auto">
        {breadcrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
