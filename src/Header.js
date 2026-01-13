import { Link } from "react-router-dom";
import "./App.css";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <h1>Ministry of Road Transport & Highways</h1>
        <small>Government of India</small>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <a href="#">User Manual</a>
        <a href="#">Contact Us</a>
        <a href="#">Login</a>
      </nav>
    </header>
  );
}
