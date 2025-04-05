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

const StaticBreadcrumb: React.FC = () => {
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

    const items = [];

    // Home link
    items.push(
      <BreadcrumbItem key="home">
        <BreadcrumbLink
          href="/"
          className="px-2 py-1 rounded-md text-primary underline-offset-4 hover:underline"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
    );

    // Handle dynamic paths
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

    return items;
  }, [pathname, capitalizedSegments, pathSegments, router]);

  if (!breadcrumbItems) return null;

  return (
    <div className="py-4">
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
