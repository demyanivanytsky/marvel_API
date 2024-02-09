<<<<<<< HEAD
import {Link, NavLink} from 'react-router-dom';
=======
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
<<<<<<< HEAD
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink exact activeStyle={{'color': '#9f0013'}} to="/">Characters</NavLink></li>
                    /
                    <li><NavLink activeStyle={{'color': '#9f0013'}} to="/comics">Comics</NavLink></li>
=======
                <a href="#">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="#">Characters</a></li>
                    /
                    <li><a href="#">Comics</a></li>
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;