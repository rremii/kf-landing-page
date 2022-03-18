import css from './NavBar.module.sass'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return <div className={css.NavBar}>
        <div className={css.container}>

            {props.text.map((name, i) => <NavLink to={props.ArrOfLinks[i]}>{name}</NavLink>)}
            <div></div>
        </div>
        <span className={css.contacts}>Contact</span>
    </div>
}
export default NavBar