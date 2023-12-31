import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function LayoutSetting({ children }) {
  return (
    <>
      <Layout>
        <div className="w-full flex shadow-sm shadow-slate-300 bg-white text-sm text-slate-500">
          <Link
            to="/setting/account"
            className="hover:bg-blue-50 border-b-2 border-transparent hover:border-blue-400 p-4"
          >
            Account
          </Link>
          <Link
            to="/setting/profile"
            className="hover:bg-blue-50 border-b-2 border-transparent hover:border-blue-400 p-4"
          >
            Profile
          </Link>
          <Link
            to="/setting/notification"
            className="hover:bg-blue-50 border-b-2 border-transparent hover:border-blue-400 p-4"
          >
            Personal Information
          </Link>
        </div>
        <div className="space-y-10 px-5 pt-5 pb-10 divide-y divide-slate-300">
          {children}
        </div>
      </Layout>
    </>
  );
}
