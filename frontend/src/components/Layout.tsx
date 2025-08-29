
import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import "./layout.css";

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
