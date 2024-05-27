"use client";
import Image from "next/image";
import arrowDown from "../assets/icons/arrow-down.png";
import settingsIcon from "../assets/icons/setting-03.png";
import messageIcon from "../assets/icons/mail-02.png";
import notificationIcon from "../assets/icons/notification-03.png";
import Link from "next/link";
import { useState } from "react";

function MainNavItems() {
  const [dropdown, setDropDown] = useState(false);

  const clickHandler = () => {
    setDropDown(!dropdown);
  };

  return (
    <div className="flex items-center gap-10">
      <div className="flex gap-7">
        <Link href="">
          <Image src={settingsIcon} width={20} />
        </Link>
        <Link href="">
          <Image src={messageIcon} width={20} />
        </Link>
        <Link href="">
          <Image src={notificationIcon} width={20} />
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <div className="profileImage"></div>
        <button type="button" onClick={clickHandler}>
          <Image src={arrowDown} className={`w-3 ${dropdown ? "rotate-[-180deg]" : "rotate-0"} transition-all duration-500`} />
        </button>
        <div
          className={`bg-white rounded-lg absolute right-2 top-16 flex flex-col w-1/5 ${
            !dropdown ? "hidden" : "block"
          } transition-all duration-1000`}
        >
          <Link
            href="/profile"
            className="hover:bg-slate-200/90 p-3 rounded-tl-lg rounded-tr-lg  "
          >
            Profile
          </Link>
          <Link
            href="/logout"
            className="hover:bg-slate-200/90 p-3 rounded-bl-lg rounded-br-lg  "
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainNavItems;
