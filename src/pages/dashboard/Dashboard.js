import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DashNav from "../../components/Navbar/DashNav";
import { Sidebar } from "../../components/sidebar/Sidebar";
import classes from "./Dashboard.module.css";
export default function Dashboard() {
  let sideNavVis = useSelector((state) => state.visibility.sideNavVi);
  return (
    <div className={classes.dashboard}>
      <DashNav />
      <div className={classes.dashContent}>
        {sideNavVis && <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
}
