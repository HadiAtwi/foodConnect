// layout/PortalLayout.js
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./PortalLayout.css";

function PortalLayout({ children }) {
  return (
    <div className="ngo-portal">
      <Navbar />
      <div className="ngo-body">
        <Sidebar />
        <main className="ngo-main">{children}</main>
      </div>
    </div>
  );
}

export default PortalLayout;
