import "./Header.css";
import netflixlogo from "../../assets/netflix-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; // Import the MenuIcon
import { useState } from "react";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul
            className={`header-left-list ${
              showMobileMenu ? "mobile-menu-open" : ""
            }`}
          >
            <li>
              <img src={netflixlogo} alt="netfloc-logo" width="100px" />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li className="browse-language">Browse by languge</li>
          </ul>
          {/* Mobile menu toggle button */}
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <MenuIcon />
          </div>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li className="dropdown-arrow">
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
