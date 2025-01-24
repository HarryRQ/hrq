import "../styles/NavBar.css";
import { IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";

export default function NavBar() {
  return (
    <header className="header">
      <a href="/" className="Harito">
        {`{ Harito.io }`}
      </a>
      <div className="s-icons">
        <a
          href="https://www.linkedin.com/in/harry-rivera/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin size={30} stroke={2} color="rgb(153, 244, 228)" />
        </a>
        <a
          href="https://www.instagram.com/coralito.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram size={30} stroke={2} color="rgb(153, 244, 228)" />
        </a>
      </div>
      <nav className="navbar">
        <a href="/">Home </a>
        <a href="#description">About Me </a>
        <a href="#experience">Experience </a>
        <a href="#lets-connect">Lets Connect!</a>
      </nav>
    </header>
  );
}
