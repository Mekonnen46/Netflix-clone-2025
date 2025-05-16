// import React from 'react'
// import './header.css';
// import NetflixLogo from '../../assets/images/netflix_rep.svg'; // Added missing semicolon
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SearchIcon from "@mui/icons-material/Search";



// function Header() {
//   return (
//     <div className="header_outer_container">
//       <div className="header__container"> 
//       <div className="header__left">
//         <ul>
//           <li>
//             <img src={NetflixLogo} alt="Netflix Logo" width="100" />
//           </li>
//           <li>Netflix</li>
//           <li>Home</li>
//           <li>TVShows</li>
//           <li>Movies</li>
//           <li>Latest</li>
//           <li>MyList</li>
//           <li>Browse by Languages</li>
//         </ul>
//       </div>
     
//       <div className="header__right row">
//         <ul>
//           <li className="col">
//             <SearchIcon />
//           </li>
//           <li className="col">
//             <NotificationsNoneIcon />
//           </li>
//           <li className="col">
//             <AccountBoxIcon />
//           </li>
//           <li className="col">
//             <ArrowDropDownIcon />
//           </li>
//         </ul>
//       </div>
//       </div>
//     </div>
//   );
// }
// export default Header

import React from "react";
import "./header.css";
import netflixLogo from "../../assets/images/netflix_rep.svg"
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsNoneIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

const Header = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          {/* navbar navbar-dark bg-dark px-3
        <span className="navbar-brand mb-0 h1">Netflix Clone</span> */}
          <div className="header_left">
            <ul>
              <li>
                <img src={netflixLogo} alt="Netflix Logo" width="100" />
              </li>
              <li>TVShows</li>
              <li>Home</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className="header_right row">
            <ul>
              <li className="col">
                <SearchIcon />
              </li>
              <li className="col">
                <NotificationsNoneIcon />
              </li>
              <li className="col">
                <AccountBoxIcon />
              </li>
              <li className="col">
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;