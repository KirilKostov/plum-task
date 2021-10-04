import React, { useState } from "react";
import { Icon } from "./Icon";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const navigationLinks = [
  { link: "/homes", text: "Homes" },
  { link: "/hosts", text: "Hosts" },
  { link: "/help", text: "Need help?" },
  { link: "/login", text: "Login" },
];

export function Header({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  return (
    <header className="app-header">
      <Icon type={isOpen ? faTimes : faBars} onClick={toggle} />
      {isOpen && (
        <ul className="menu-links">
          {navigationLinks.map((nav) => (
            <li key={nav.text}>
              <a href={nav.link} onClick={toggle} onBlur={hide} onFocus={show}>
                {nav.text}
              </a>
            </li>
          ))}
        </ul>
      )}
      <nav className="app-nav">
        <ul className="links-container">
          <li>
            <a href="/homes">Homes</a>
          </li>
          <li>
            <a href="/hosts">Hosts</a>
          </li>
        </ul>
        <h2 className="app-title">{title}</h2>
        <ul className="links-container">
          <li>
            <a href="/help">Need help?</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <Icon type={faSearch} onClick={() => console.log("open search")} />
    </header>
  );
}
