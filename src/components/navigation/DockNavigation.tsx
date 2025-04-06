"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  RiHome5Line,
  RiHome5Fill,
  RiSearchLine,
  RiSearchFill,
  RiUser3Line,
  RiUser3Fill,
  RiBookmarkLine,
  RiBookmarkFill,
} from "react-icons/ri";

const BottomNav = () => {
  const pathname = usePathname();

  const navigation = [
    {
      name: "Home",
      href: "/",
      activeIcon: RiHome5Fill,
      inactiveIcon: RiHome5Line,
    },
    {
      name: "Search",
      href: "/search",
      activeIcon: RiSearchFill,
      inactiveIcon: RiSearchLine,
    },
    {
      name: "Bookmarks",
      href: "/bookmarks",
      activeIcon: RiBookmarkFill,
      inactiveIcon: RiBookmarkLine,
    },
    {
      name: "Profile",
      href: "/profile",
      activeIcon: RiUser3Fill,
      inactiveIcon: RiUser3Line,
    },
  ];

  return (
    <nav className="bottom-0 z-10 fixed sm:hidden bg-white dark:bg-gray-900 dark:border-gray-700 border-t w-full">
      <div className="mx-auto px-6">
        <div className="flex justify-between items-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex flex-col items-center gap-1 p-3 text-sm transition-transform hover:-translate-y-1 ${
                  isActive
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {isActive ? (
                  <item.activeIcon className="w-6 h-6" />
                ) : (
                  <item.inactiveIcon className="w-6 h-6" />
                )}
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
