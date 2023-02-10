import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { useRouter } from "next/router";

const navigations = [
  { label: "Home", path: "/" },
  { label: "Sobre o projeto", path: "/about" },
];

export const Header = () => {
  const router = useRouter();

  const { pathname } = router;

  return (
    <header className="h-16 bg-blue-400 dark:bg-purple-600 shadow-xl">
      <div className="max-w-6xl mx-auto h-full flex justify-between">
        <ul className="flex h-full items-center gap-4">
          {navigations.map((nav) => (
            <li
              key={nav.label}
              className={`px-3 flex items-center h-full ${
                pathname === nav.path
                  ? "bg-gray-100 font-bold dark:bg-black"
                  : "text-gray-100"
              }`}
            >
              <Link href={nav.path}>{nav.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
