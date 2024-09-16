import Link from "next/link";

import { getUser } from "@/data/services/user-services";

import Cart from "./Cart";
import LoginLinks from "./LoginLinks";
import LogoutButton from "./LogoutButton";

const AppHeader = async () => {
  const user = await getUser();
  
  return (
    <div
      className="sticky top-0 flex flex-row justify-between items-center h-16 px-8 py-1 z-50"
      style={{ backgroundColor: "#aa00ff" }}
    >
      <img
        src="/pokemon_logo.png"
        alt="Pokemon Logo"
        className="w-[auto] h-[100%]"
      />
      <div className="flex">
        <Link href="/" className="text-xl text-black hover:text-blue">
          Home
        </Link>
      </div>
      <div className="flex">
        <Cart />
        <div className="flex ml-8 text-xl">
          {user.data ? <LogoutButton /> : <LoginLinks />}
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
