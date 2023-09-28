import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
