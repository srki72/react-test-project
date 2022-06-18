import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
       return (
         <div className="footer">
             <ul className="footer-nav">
               <li className="menu-item ">
                 <NavLink to={`/MyProfile`}> My Profile </NavLink>{" "}
               </li>
               <li className="menu-item ">
                 <NavLink to={`/About`}> About </NavLink>{" "}
               </li>
               <li className="menu-item ">
                 <NavLink to={`/Contact`}> Contact </NavLink>{" "}
               </li>
             </ul>

         </div>
       );
}

export default Footer
