import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router";

const Header = ({ user }) => {
  return (
    <header className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-0.5">
          <img
            className="h-10"
            src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp"
            alt="Logo da Hashtag"
          />
          <p className="text-primary-400 text-2xl font-bold">ashbnb</p>
        </Link>

        <Link
          to="/"
          className="hidden items-center rounded-full border border-gray-300 px-4 py-2 shadow-md lg:flex"
        >
          <p className="border-r border-r-gray-300 pr-4">Qualquer lugar</p>
          <p className="border-r border-r-gray-300 px-4">Qualquer semana</p>
          <p className="px-4">Hóspedes</p>
          <div className="bg-primary-400 rounded-full p-2 text-white">
            <MagnifyingGlassIcon className="size-4" />
          </div>
        </Link>

        <Link
          to={user ? "/account" : "/login"}
          className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 shadow-md"
        >
          <Bars3Icon className="size-5 text-gray-600" />
          <UserCircleIcon className="size-8 text-gray-600" />

          {user && <p className="max-w-20 truncate sm:max-w-32">{user.name}</p>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
