import logo from './assets/KF_Logo.svg';
import NavBar from "./components/NavBar/NavBar";
import css from './App.module.sass'

function App() {
    return (
        <div className={css.App}>
            <nav>
                <img className={css.logo} src={logo} alt=""/>
                <NavBar/>
            </nav>
            <main>
                <div></div>
                <div></div>
            </main>

        </div>
    );
}

export default App;
