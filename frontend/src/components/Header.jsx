import React, { useRef, useEffect } from "react";
import "./header.css";
import { Container } from "reactstrap";

import { NavLink } from "react-router-dom";

import Logo from '../assets/Logo.png'

import {Link} from 'react-router-dom'

import 'animate.css';

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Help",
    url: "/help",
  },
  {
    display: "Install",
    url: "/install",
  },
];

const Navbar = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="barLogo animate__animated animate__bounceIn animate__delay-1s">
          <Link to={'/home'}>
            <h1>SaveYT.net
              <img style={{height: "25px", width: "25px", marginLeft:"10px" }} src={Logo} alt="logo" />
            </h1>
          </Link>
        </div>
        <div className="navigation">

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list animate__animated animate__fadeInDown">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

    </header>
  );
};

export default Navbar;