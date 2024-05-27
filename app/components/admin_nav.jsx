import { Admin_Nav_Links } from "./admin_nav_links";
import Link from "next/link";
import Image from "next/image";

function AdminNav() {
  return (
    <div
      className="lg:w-[20%] bg-white flex flex-col gap-3 h-screen
      border-b-0 border sm:w-[60%] sticky top-0"
    >
      <h1 className="p-4 font-bold text-2xl">
        <Link href="/">Wilmar HR</Link>
      </h1>
      <h2 className="bg-red-400 text-white w-fit py-1 px-4 rounded-md ml-2 mb-2 tex font-semibold">
        Dashboard
      </h2>
      <ul className="flex flex-col gap-4 h-full w-full bg-gray-800 p-3">
        {Admin_Nav_Links.map((link, index) => (
          <li key={index} className="basis-[10%]">
            <div className="text-white items-center text-sm p-3 rounded-md flex gap-3">
              <Image src={link.icon} alt="icon" className="w-[20px] h-[20px]" />
              <Link href={link.url}>{link.name}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminNav;
