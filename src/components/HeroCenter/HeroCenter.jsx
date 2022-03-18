import css from './HeroCenter.module.sass'
import checkMark from './../../assets/checkMark.svg'
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";

const HeroCenter = (props) => {
    return <div className={css.HeroCenter}>
        <div>

            {/*<h1><span>A NEW GENERATION</span><br/> OF <span>PATIENT MONITORS</span></h1>*/}
            <h1>
                {props.HeadLine.map((data) => {
                    if (data.span) return <span>{data.span}</span>
                    if (data.br) return <br/>
                    if (data.text) return data.text
                })}
            </h1>

            {/*<li><img src={checkMark} alt=""/>completely <span>free</span></li>*/}

            {/*<li><img src={checkMark} alt=""/><span>no contact information</span> needed</li>*/}

            {/*<li><img src={checkMark} alt=""/>Developed in <span>open source</span></li>*/}


            <li><img src={checkMark} alt=""/>
                {/*{props.BulletPoints.map(data)=>{*/}
                {/*    */}
                {/*}}*/}

            </li>
        </div>
    </div>
}
export default HeroCenter