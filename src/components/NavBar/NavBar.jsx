import css from './NavBar.module.sass'

const NavBar = () => {
    return <div className={css.NavBar}>
        <div className={css.container}>
            <span>Monitor</span>
            <span>Team</span>
            <span>Testimonials</span>
            <div></div>
        </div>
        <span className={css.contacts}>Contact</span>
    </div>
}
export default NavBar