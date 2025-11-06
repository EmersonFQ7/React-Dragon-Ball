import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div className="container d-flex justify-content-between align-items-center">
      <Link className="navbar-brand fw-bold" to="/">Dragon Ball Explorer</Link>
      <div className="d-flex gap-3">
        <Link className="btn btn-outline-light btn-sm" to="/">Home</Link>
        <Link className="btn btn-outline-light btn-sm" to="/entities">Entities</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
