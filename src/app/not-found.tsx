"use client";
import DynamicButton from "@/components/buttons/button-dynamic";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

/**
 * NotFound component renders a 404 error page with a countdown timer that redirects to the home page.
 *
 * @component
 * @example
 * return (
 *   <NotFound />
 * )
 *
 * @returns {JSX.Element} The rendered 404 error page component.
 *
 * @remarks
 * The component uses a countdown timer to redirect the user to the home page after 10 seconds.
 * The user can cancel the redirection by clicking the "Cancel Redirection" button.
 *
 * @hook
 * - `useRouter` from `next/router` to handle navigation.
 * - `useState` to manage the countdown timer and redirection state.
 * - `useEffect` to set up the countdown timer and redirection logic.
 *
 * @dependencies
 * - `DynamicButton` component for rendering buttons.
 * - `IoMdClose` icon from `react-icons/io` for the cancel button.
 * - `FaPhoneAlt` icon from `react-icons/fa` for the contact support button.
 *
 * @css
 * - Uses Tailwind CSS classes for styling.
 */
const NotFound = (): JSX.Element => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const [redirect, setRedirect] = useState(true);

  useEffect(() => {
    if (!redirect) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push(`/`);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router, redirect]);

  return (
    <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
      <div className="text-center">
        <h1 className="my-4 text-balance uppercase font-Luckiest tracking-wider lg:text-4xl text-lg text-primary font-extrabold text-center">
          404 Page not found
        </h1>
        <div className="mt-6 text-pretty text-lg font-medium sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
          {redirect && (
            <p>
              Redirecting you to the home page in{" "}
              <span className="font-bold">{countdown}</span> seconds.
            </p>
          )}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
          <DynamicButton
            text="Go back home"
            onClick={() => {
              router.push(`/`);
            }}
          />
          {redirect && (
            <DynamicButton
              variant="outline"
              icon={IoMdClose}
              text="Cancel Redirection"
              onClick={() => {
                setRedirect(false);
                setCountdown(0);
              }}
              iconClassName="group-hover:rotate-90"
            />
          )}
          <DynamicButton
            variant="outline"
            text="Contact support"
            onClick={() => router.push(`mailto:tina@iacafterschools.com`)}
            icon={FaPhoneAlt}
            iconClassName="group-hover:-rotate-90"
          />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
