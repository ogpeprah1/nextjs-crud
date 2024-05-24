import "@/app/global.css";
import MainNavItems from "@/app/components/main_nav";
import AdminNav from "@/app/components/admin_nav";

export const metadata = {
  title: {
    default: "Admin",
    template: "%s | Admin | HRR..",
  },
  description: "Manage your employees in just one app.",
};

export default function AdminPageLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <AdminNav />
        <div className=" w-full p-6 bg-slate-200">
          <div className="flex justify-between mt-[-20px] bg-slate-200 sticky top-0  p-2 w-full  shadow-none">
            <p className="">
              Welcome back,<span className="font-bold"> Godfred</span>
            </p>
            <MainNavItems />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
