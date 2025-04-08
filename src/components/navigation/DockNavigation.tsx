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
    <nav className="bottom-0 z-10 fixed sm:hidden bg-background dark:border-chart-1 border-t w-full text-foreground">
      <div className="mx-auto px-6">
        <div className="flex justify-between items-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex flex-col items-center gap-1 p-3 text-sm transition-transform hover:-translate-y-1 ${
                  isActive ? "text-primary dark:text-chart-2" : "text-accent"
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
}
