import logo from './assets/KF_Logo.svg';
import NavBar from "./components/NavBar/NavBar";
import css from './App.module.sass'
import HeadlSepList from "./components/HeadlSepList/HeadlSepList";
import HeroCenter from "./components/HeroCenter/HeroCenter";
import ScrollDown from "./components/ScrollDown/ScrollDown";

function App() {
    return (
        <div className={css.App}>
            <nav>
                <img className={css.logo} src={logo} alt=""/>
                <NavBar/>
            </nav>
            <main>
                <HeroCenter/>
                <HeadlSepList/>
                <ScrollDown/>
            </main>

        </div>
    );
}

export default App;
