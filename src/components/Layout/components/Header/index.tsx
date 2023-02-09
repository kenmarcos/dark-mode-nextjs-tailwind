import { Button } from "@/components/Button";
import Link from "next/link";

const navigations = [
  { label: "Home", path: "/" },
  { label: "Quem Somos", path: "/about" },
];

export const Header = () => {
  return (
    <header className="h-16">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
        <ul className="flex gap-4">
          {navigations.map((nav) => (
            <li key={nav.label}>
              <Link href={nav.path}>{nav.label}</Link>
            </li>
          ))}
        </ul>

        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};
