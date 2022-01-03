import css from './ScrollDown.module.sass'


const ScrollDown = () => {
    return <div className={css.ScrollDown}>
        <span>to login</span>
        <span>Scroll down </span>
        <div className={css.whiteDiv1}/>
        <div className={css.whiteDiv2}/>
        <div className={css.whiteDiv3}/>
        <div className={css.yellowDiv}/>
        <div className={css.redDiv}/>
    </div>
}
export default ScrollDown