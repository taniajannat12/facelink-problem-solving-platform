
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
}
