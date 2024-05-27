import Image from "next/image";
import Link from "next/link";
import CompanyLogo from "../assets/images/wilmar.png";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="flex flex-col justify-center items-center w-full p-4 h-full sm:h-fit sm:p-0 sm:w-1/4 ">
      <Image src={CompanyLogo} className="w-[100px]" />
      <h2 className="mt-6 text-center text-2xl font-extrabold text-white text-wrap w-full">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-500 ">
        {paragraph}
        <Link
          href={linkUrl}
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
