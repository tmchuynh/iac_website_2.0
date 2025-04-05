"use client";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">My School</div>
      <ul className="flex space-x-4">
        <li>
          <a href="/programs" className="hover:text-gray-400">
            Programs
          </a>
        </li>
        <li>
          <a href="/school_information" className="hover:text-gray-400">
            School Information
          </a>
        </li>
      </ul>
    </nav>
  );
}
