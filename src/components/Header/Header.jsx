import { useEffect, useState, useContext } from "react";
import { useevigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div>
          <div className="header-content">
            <ul className="left">
              <li>Home</li>
              <li>About</li>
              <li>Categories</li>
            </ul>
            <div className="center">SFCSTORE</div>
            <div className="right">
              <TbSearch onClick={() => setshowSearch(true)}/>
              <AiOutlineHeart />
              <span className="cart-icon" onClick={() => setshowCart(true)}>
                <CgShoppingCart />
                <span>5</span>
              </span>
            </div>
          </div>
        </div>
      </header>
      {showCart && <Cart setshowCart={setshowCart} />}
      {showSearch && <Search setshowSearch={setshowSearch} />}
    </>
  );
};

export default Header;
