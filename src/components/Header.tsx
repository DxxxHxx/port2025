import { useState, MouseEvent } from "react";
import { headerNav } from "../constants/headerConstant";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = e.currentTarget.textContent?.toLowerCase();

    const $target = document.getElementById(id!);
    $target?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <Link to={"/"}>
            portfolio<em>donghun</em>
          </Link>
        </div>
        <nav
          className={`header__nav ${isOpen ? "show" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul>
            {headerNav.map((item) => (
              <li key={item.id}>
                <a onClick={handleButtonClick} href={`/#${item.title}`}>
                  {item.title}
                </a>
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
