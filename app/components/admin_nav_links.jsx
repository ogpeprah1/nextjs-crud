import EmployeeIcon from "../assets/icons/employee.png";
import ScheduleIcon from "../assets/icons/calendar-01.png";
import ReportAndAnalyticsIcon from "../assets/icons/file-01.png";
import HelpIcon from "../assets/icons/information-circle.png";
import LogoutIcon from "../assets/icons/logout-03.png";

export const Admin_Nav_Links = [
  {
    name: "Dashboard",
    url: "/admin",
    icon: ReportAndAnalyticsIcon,
  },
  {
    name: "Departments",
    url: "/admin/departments",
    icon: EmployeeIcon,
  },
  {
    name: "Employees",
    url: "/admin/employees",
    icon: HelpIcon,
  },
  {
    name: "Leave Requests",
    url: "/admin/leave_requests",
    icon: ScheduleIcon,
  },
  {
    name: "Logout",
    url: "",
    icon: LogoutIcon,
  },
];
