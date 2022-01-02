import css from './HeroCenter.module.sass'
import checkMark from './../../assets/checkMark.svg'

const HeroCenter = () => {
    return <div className={css.HeroCenter}>
        <div>

            <h1><span>A NEW GENERATION</span><br/> OF <span>PATIENT MONITORS</span></h1>

            <li><img src={checkMark} alt=""/>completely <span>free</span></li>

            <li><img src={checkMark} alt=""/><span>no contact information</span> needed</li>

            <li><img src={checkMark} alt=""/>Developed in <span>open source</span></li>
        </div>
    </div>
}
export default HeroCenter