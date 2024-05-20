import "@/app/global.css";
import MainNavItems from "@/app/components/main_nav";
import EmpNav from "@/app/components/emp_nav";

export const metadata = {
  title: {
    default: "HRR..",
    template: "%s | Employee | HRR..",
  },
  description: "Manage your employees in just one app.",
};

export default function EmpPageLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EmpNav />
        <div className=" w-full p-6">
          <div className="flex justify-between mb-4">
            <p className="">
              Welcome back,<span className="font-bold"> Godfred</span>
            </p>
            <MainNavItems />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
