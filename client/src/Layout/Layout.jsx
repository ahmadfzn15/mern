import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { ProtectProvider } from "../Context/Protect";

export default function Layout({ children, className = "" }) {
  return (
    <ProtectProvider>
      <div className="bg-slate-100 min-h-screen font-poppins">
        <Navbar />
        <Sidebar />
        <div className="pl-56 pt-16">
          <div className={className}>{children}</div>
        </div>
      </div>
    </ProtectProvider>
  );
}
