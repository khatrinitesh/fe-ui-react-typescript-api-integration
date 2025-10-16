import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Path } from "../routes/Path";

const Header = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
  return (
    <header
      style={{
        background: "#007bff",
        padding: "1rem",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to={Path.HOME}>Home</Link>
        <Link to={Path.ABOUT}>About</Link>
        <Link to={Path.SERVICES}>Services</Link>
        <Link to={Path.CONTACT}>Contact</Link>
        <Link to={Path.DASHBOARD}>Dashboard</Link>
      </nav>
      {isAuthenticated ? (
        <button
          className="cursor-pointer bg-red-300 px-[20px] py-[5px]"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <button
          className="cursor-pointer bg-green-700 px-[20px] py-[5px]"
          onClick={login}
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
