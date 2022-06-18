import React from 'react'
import {NavLink} from 'react-router-dom';

const LightningDecor = () => {
       return (
              <div className="sec__one">
                     <div className="title_and_links">
                          <div className="title_goods">
                               <h1> Lightning & Decor </h1>
                          </div>
                          <div className="links_to_goods">
                                <div className="title_and_links_to_goods">
                                  <h3>
                                     Lightning     
                                  </h3>  
                                  <li className="lightning_goods" ><NavLink  to={`/`}> Table Lamps </NavLink> </li>
                                  <li className="lightning_goods" ><NavLink  to={`/`}> Floor Lamps </NavLink> </li>   
                                  <li className="lightning_goods" ><NavLink  to={`/`}> Lamps Shades </NavLink> </li>   
                               </div>
                               <div className="title_and_links_to_goods">
                                 <h3>
                                   Decor     
                                </h3> 
                                <li className="lightning_goods" ><NavLink  to={`/`}> Art & Figuratines </NavLink> </li>
                                <li className="lightning_goods" ><NavLink  to={`/`}> Candles </NavLink> </li>   
                                <li className="lightning_goods" ><NavLink  to={`/`}> Decorative Pillows </NavLink> </li>       
                               </div>
                               <div className="title_and_links_to_goods">
                                 <h3>
                                   Plants     
                                </h3>
                                <li className="lightning_goods" ><NavLink  to={`/`}> Artificial Plants </NavLink> </li>
                                <li className="lightning_goods" ><NavLink  to={`/`}> Potted Plants </NavLink> </li>   
                                <li className="lightning_goods" ><NavLink  to={`/`}> Flower Pots </NavLink> </li>   
     
                               </div>
                          </div>
                     </div>
                     <div className="photo_links">
                          <div className="photo_link">
                               <img src="/images/elly-endeavours-mGzPM-ALnG8-unsplash.jpg" alt="new collection"></img> 
                               <a href="/"> New Collections </a>
                          </div>
                          <div className="photo_link">
                               <img src="/images/elly-endeavours-mGzPM-ALnG8-unsplash.jpg" alt="new collection"></img> 
                               <a href="/"> Sale </a>
                          </div>
                     </div>
              </div>
       )
}

export default LightningDecor
