import Image from "next/image";
import Link from "next/link";
import CompanyLogo from "./assets/images/wilmar.png";

const Home = () => {
  return (
    <div className="w-full text-white h-screen flex flex-col items-center  bg-gray-800">
      <div className="w-screen flex justify-between px-[150px] py-10">
        <div>
          <Link href="/">
            <Image src={CompanyLogo} className="w-[100px]" />
          </Link>
        </div>
        <ul className="flex gap-10 items-center">
          <Link
            href="/admin"
            className="hover:text-yellow-300 duration-700"
          >
            Dashboard
          </Link>
          <Link
            href="/sign_in"
            className="py-1 px-5 rounded-[20px] font-bold bg-white text-black duration-700 hover:bg-blue-700 hover:text-white"
          >
            Login
          </Link>
        </ul>
      </div>
      <div className="  w-full h-1/2 flex flex-col items-center justify-center p-10 gap-5">
        <h1 className="text-5xl font-bold">Wilmar HR System</h1>
        <p className="text-2xl font-bold">
          HR functionalities incorporated in one app.
        </p>
        <p className="w-[40%] text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          laudantium quod accusamus quam! Officiis quam architecto, amet commodi
          voluptatum deserunt.
        </p>
      </div>
      <hr className="w-1/2 opacity-30" />
      <div className="w-full  text-center p-7 opacity-50">
        some extra content down here..
      </div>
    </div>
  );
};

export default Home;
