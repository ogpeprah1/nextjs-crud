import EmployeeIcon from "../assets/icons/employee.png";
import ScheduleIcon from "../assets/icons/calendar-01.png";
import ReportAndAnalyticsIcon from "../assets/icons/file-01.png";
import HelpIcon from "../assets/icons/information-circle.png";
import LogoutIcon from "../assets/icons/logout-03.png";

export const Emp_Nav_Links = [
  {
    name: "Dashboard",
    url: "/employee",
    icon: ReportAndAnalyticsIcon,
  },
  {
    name: "Change Password",
    url: "/employee/change_password",
    icon: HelpIcon,
  },
  {
    name: "Apply Leave",
    url: "/employee/apply_leave",
    icon: ScheduleIcon,
  },
  {
    name: "Logout",
    url: "",
    icon: LogoutIcon,
  },
];
