import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          <div className="header__middle__menus">
            {/* Responsive Menu Button */}
            {isResponsiveclose === true ? (
              <>
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  {" "}
                  <FiXCircle />
                </span>
              </>
            ) : (
              <>
                <span
                  className="menubar__button"
                  style={{ display: "none" }}
                  onClick={toggleClass}
                >
                  {" "}
                  <FiAlignRight />
                </span>
              </>
            )}
            <div className="header__middle__menus_1">
              <ul className={boxClass.join(" ")}>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link to="#">
                    {" "}
                    US <FiChevronDown />{" "}
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/`}
                      >
                        {" "}
                        XXX{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/`}
                      >
                        {" "}
                        YYY{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/About`}
                  >
                    {" "}
                    About{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Contact`}
                  >
                    {" "}
                    Contact{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </div>

            <div className="header__middle__logo">
              <NavLink exact activeClassName="is-active" to="/">
                L O G O
              </NavLink>
            </div>

            <div className="header__middle__menus_2">
              <ul className={boxClass.join(" ")}>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/MyProfile`}
                  >
                    {" "}
                    My Profile{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Items`}
                  >
                    {" "}
                    Items{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <input type="text" class="input" placeholder="search..." />
        </div>
        <div className="header__second__menus">
          <ul className="ul-sub-menu">
            <li className="menu-item">
              <NavLink
                exact
                activeClassName="is-active"
                onClick={toggleClass}
                to={`/Rooms`}
              >
                {" "}
                Rooms{" "}
              </NavLink>
            </li>
            <li className="menu-item ">
              <NavLink
                onClick={toggleClass}
                activeClassName="is-active"
                to={`/Furniture`}
              >
                {" "}
                Furniture{" "}
              </NavLink>{" "}
            </li>
            <li className="menu-item ">
              <NavLink
                onClick={toggleClass}
                activeClassName="is-active"
                to={`/LightningDecor`}
              >
                {" "}
                Lightning & Decor{" "}
              </NavLink>{" "}
            </li>
            <li className="menu-item ">
              <NavLink
                onClick={toggleClass}
                activeClassName="is-active"
                to={`/Kitchen`}
              >
                {" "}
                Kitchen{" "}
              </NavLink>{" "}
            </li>
            <li className="menu-item ">
              <NavLink
                onClick={toggleClass}
                activeClassName="is-active"
                to={`/BathBody`}
              >
                {" "}
                Bath & Body{" "}
              </NavLink>{" "}
            </li>
            <li className="menu-item ">
              <NavLink
                onClick={toggleClass}
                activeClassName="is-active"
                to={`/Garden`}
              >
                {" "}
                Garden{" "}
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbarmenu;
