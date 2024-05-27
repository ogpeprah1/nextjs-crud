"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const metadata = {
  title: {
    default: "Change Password",
  },
};

const PopupContainerLayout = ({ children }) => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setShowPopup(true);
  }, [pathname == "/employee/change_password"]);

  const handleClosePopup = () => {
    setShowPopup(false);
    router.back();
  };

  return (
    showPopup && (
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 `}
      >
        <div className="bg-white w-fit p-8 rounded-lg shadow-md">
          <button
            className="absolute top-0 right-10 p-2 text-5xl text-white"
            onClick={handleClosePopup}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default PopupContainerLayout;
