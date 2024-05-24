import { Link } from "react-router-dom";

import './Menu.css'

const Menu = () => {
    return (
        <ul className='menu-list' >
            <li className="menu-element">
                <Link to='/game' >Play</Link>
            </li>
            <li className="menu-element">
                <Link to='/leaderboard' >Leaderboard</Link>
            </li>
        </ul>
    );
};

export default Menu;
