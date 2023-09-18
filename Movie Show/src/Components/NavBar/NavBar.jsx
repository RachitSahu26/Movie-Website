
// ............import items................
import React from 'react'
import "../NavBar/NavBarStyle.css";
import { Link } from 'react-router-dom';


// ................code started with here .............


function NavBar() {
    return (
        <div className='header'>
            {/* ..............left side nav............ */}
<div className="left-side">
<p><Link to="/">Vrs</Link></p>
</div>

            <div className="mid-side">
        
                <ul>
                    <li><Link to="/popular">Popular</Link></li>
                    <li><Link to="/Top_rated">Top Rated</Link></li>
                    <li><Link to="/Up_coming">Up coming</Link></li>




                </ul>
            </div>

            {/* ..............right side nav............ */}
            <div className="right-side">
<p>User Account</p>
            </div>

        </div>
    )
}

export default NavBar
