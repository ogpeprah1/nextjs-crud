import Image from "next/image";
import arrowDown from "../assets/icons/arrow-down.png";
import settingsIcon from "../assets/icons/setting-03.png";
import messageIcon from "../assets/icons/mail-02.png";
import notificationIcon from "../assets/icons/notification-03.png";
import Link from "next/link";

function MainNavItems() {
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
        <button type="button">
          <Image src={arrowDown} className="w-3" />
        </button>
      </div>
    </div>
  );
}

export default MainNavItems;
