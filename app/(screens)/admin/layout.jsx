import "@/app/global.css";
import MainNavItems from "@/app/components/main_nav";
import AdminNav from "@/app/components/admin_nav";

export const metadata = {
  title: {
    default: "Admin",
    template: "%s | Admin | Wilmar HR",
  },
  description: "Manage your employees in just one app.",
};

export default function AdminPageLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <AdminNav />
        <div className=" w-full p-6 bg-slate-100">
          <div className="flex justify-between mt-[-20px] mb-4 bg-slate-100 z-50 sticky top-0  pt-4 w-full  shadow-none">
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
