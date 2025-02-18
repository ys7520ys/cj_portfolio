import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/img/logo.png";


const Header = () => {
  return (
    <header role="banner" className="header">
      <Link to="/">
        <img 
          src={logoImg} 
          alt="CJENM 로고 이미지" 
          className="header__logo" 
          title="홈페이지로 이동하기"
        />
      </Link>
      <nav className="header__nav" aria-label="메인 네비게이션">
        <ul className="header__nav-lists" role="menu">
          <li className="list" role="none">
            <Link 
              to="/about" 
              className="list-link" 
              aria-label="ABOUT US 페이지로 이동"
              title="ABOUT US페이지로 이동하기"
            >
              ABOUT US
            </Link>
          </li>
          <li className="list" role="none">
            <Link 
              to="/asset" 
              className="list-link" 
              aria-label="ASSET 페이지로 이동"
              title="ASSET 페이지로 이동하기"
            >
              ASSET
            </Link>
          </li>
          <li className="list" role="none">
            <Link 
              to="/news" 
              className="list-link" 
              aria-label="NEWS 페이지로 이동"
              title="NEWS 페이지로 이동하기"
            >
              NEWS
            </Link>
          </li>
          <li className="list" role="none">
            <Link 
              to="/contactUs" 
              className="list-link" 
              aria-label="CONTACT US 페이지로 이동"
              title="CONTACT US 페이지로 이동하기"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;