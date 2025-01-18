import { useState } from "react";
import { headerNav } from "../constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            portfolio<em>donghun</em>
          </a>
        </div>
        <nav
          className={`header__nav ${isOpen ? "show" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul>
            {headerNav.map((item) => (
              <li key={item.url}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`header__nav__mobile `}
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={isOpen}
          role="button"
          tabIndex={0}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
}
