import css from './ScrollDown.module.sass'


const ScrollDown = () => {
    return <div className={css.ScrollDown}>
        <span>to login</span>
        <span>Scroll down </span>
        <div className={css.whiteDiv}/>
        <div className={css.whiteDiv}/>
        <div className={css.whiteDiv}/>
        <div className={css.whiteDiv}/>
    </div>
}
export default ScrollDown