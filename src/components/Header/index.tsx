import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const navigations = [
  { label: "Home", path: "/" },
  { label: "Quem Somos", path: "/about" },
];

export const Header = () => {
  return (
    <header className="h-16 bg-blue-400 dark:bg-purple-600 shadow-xl">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
        <ul className="flex gap-4">
          {navigations.map((nav) => (
            <li key={nav.label}>
              <Link className="text-gray-100" href={nav.path}>
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </div>
    </header>
  );
};
