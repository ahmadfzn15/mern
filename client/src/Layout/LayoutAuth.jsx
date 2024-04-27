import { AuthProvider } from "../Context/Auth";

export default function LayoutAuth({ children, className = "" }) {
  return (
    <AuthProvider>
      <div className="bg-slate-100 w-screen h-screen overflow-hidden flex justify-center items-center font-poppins">
        {children}
      </div>
    </AuthProvider>
  );
}
