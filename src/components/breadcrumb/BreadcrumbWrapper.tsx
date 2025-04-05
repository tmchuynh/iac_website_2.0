"use client";

import { capitalize } from "@/lib/utils/format";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const StaticBreadcrumb: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const [parentCategories, setParentCategories] = useState<any[]>([]);
  const [genders, setGenders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
          className="bg-muted px-3 py-2 rounded-lg cursor-default"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
    );

    // Handle dynamic paths
    pathSegments.forEach((_, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const capitalizedSegment = capitalizedSegments[index];

      items.push(<BreadcrumbSeparator key={`sep-${href}`} />);

      items.push(
        <BreadcrumbItem key={href}>
          <BreadcrumbLink
            href={href}
            className="bg-muted px-3 py-2 rounded-lg cursor-default"
          >
            {capitalizedSegment}
          </BreadcrumbLink>
        </BreadcrumbItem>
      );
    });

    return items;
  }, [
    pathname,
    capitalizedSegments,
    pathSegments,
    router,
    categories,
    parentCategories,
    genders,
  ]);

  if (!breadcrumbItems) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-row items-center gap-4 w-full border-t text-sm"
    >
      <ul className="text-sm w-full mx-auto py-9 flex flex-row items-center gap-4 md:w-11/12 md:mx-auto lg:w-10/12 ">
        {breadcrumbItems}
      </ul>
    </nav>
  );
};

export default StaticBreadcrumb;
