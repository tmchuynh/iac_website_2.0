"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaPhoneAlt, FaSchool, FaUsers } from "react-icons/fa";

export default function DockNavigation() {
  const pathname = usePathname();

  const navigation = [
    {
      name: "Home",
      href: "/",
      activeIcon: FaHome,
      inactiveIcon: FaHome,
    },
    {
      name: "Programs",
      href: "/programs",
      activeIcon: FaSchool,
      inactiveIcon: FaSchool,
    },
    {
      name: "Staff",
      href: "/about_us/our_staff",
      activeIcon: FaUsers,
      inactiveIcon: FaUsers,
    },
    {
      name: "Contact",
      href: "/contact_us",
      activeIcon: FaPhoneAlt,
      inactiveIcon: FaPhoneAlt,
    },
  ];

  return (
    <nav className="bottom-0 fixed z-10 sm:hidden bg-background dark:border-chart-1 border-t w-full text-foreground">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex flex-col items-center gap-1 p-3 text-sm transition-transform hover:-translate-y-1 ${
                  isActive ? "text-primary" : "text-accent"
                }`}
              >
                {isActive ? (
                  <item.activeIcon className="h-6 w-6" />
                ) : (
                  <item.inactiveIcon className="h-6 w-6" />
                )}
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
