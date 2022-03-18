import logo from './assets/KF_Logo.svg';
import NavBar from "./components/NavBar/NavBar";
import css from './App.module.sass'
import HeadlSepList from "./components/HeadlSepList/HeadlSepList";
import HeroCenter from "./components/HeroCenter/HeroCenter";
import ScrollDown from "./components/ScrollDown/ScrollDown";


function App() {
/////////////////
    let ArrOfText = ['Monitor', 'Team', 'Testimonials']
    let ArrOfLinks = ['#', '#', '#']
/////////////////

    let HeadLine = [
        {span: 'A NEW GENERATION'},
        {br: 'br'},
        {text: ' OF '},
        {span: 'PATIENT MONITORS'}]
    let BulletPoints = [
        [{text: 'completely'},
            {span: 'free'},],
        [{span: 'no contact information'},
            {text: ' needed'},],
    ]
    return (
        <div className={css.App}>
            <nav>
                <img className={css.logo} src={logo} alt=""/>
                <NavBar text={ArrOfText} ArrOfLinks={ArrOfLinks}/>
            </nav>
            <main>
                <HeroCenter HeadLine={HeadLine} BulletPoints={BulletPoints}/>
                <HeadlSepList/>
                <ScrollDown/>
            </main>

        </div>
    );
}

export default App;
