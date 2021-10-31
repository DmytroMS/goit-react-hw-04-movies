import { NavLink } from "react-router-dom";
import s from './Navigation.module.css'

const Navigation = () => (
    <nav>
        <NavLink
            exact to="/"
            className={s.link}
            activeClassName={s.activeLink}
        >
            HOME
        </NavLink>

        <NavLink
            to="/movies"
            className={s.link}
            activeClassName={s.activeLink}
        >
            MOVIES
        </NavLink>
    </nav>
)

export default Navigation;