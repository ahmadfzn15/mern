import { HiBell, HiCog6Tooth, HiHome, HiUserGroup } from "react-icons/hi2";
import { FaMoneyBillWave } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { MdSchedule } from "react-icons/md";

export const sidebar = [
  {
    link: "/",
    label: "Dashboard",
    icon: HiHome,
    nested: false,
  },
  {
    link: "/schedule",
    label: "Schedule",
    icon: MdSchedule,
    nested: false,
  },
  {
    link: "/absence",
    label: "Absence",
    icon: AiFillSchedule,
    nested: false,
  },
  {
    link: "/employee",
    label: "Employee",
    icon: HiUserGroup,
    nested: false,
  },
  {
    link: "/employee/salary",
    label: "Salary",
    icon: FaMoneyBillWave,
    nested: false,
  },
  {
    link: "/notification",
    label: "Notification",
    icon: HiBell,
    nested: false,
  },
  {
    link: "/setting",
    label: "Setting",
    icon: HiCog6Tooth,
    nested: false,
  },
];
