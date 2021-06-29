import './navbar.css';
import propic from '../../assets/propic.png';

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navLeft">
                    <i className="navIcon fas fa-phone"></i>
                    <i className="navIcon fas fa-envelope"></i>
                </div>
                <div className="navCenter">
                    <ul className="navList">
                        <li className="navListItem">HOME</li>
                        <li className="navListItem">ABOUT</li>
                        <li className="navListItem">CONTACT</li>
                        <li className="navListItem">CREATE</li>
                        <li className="navListItem">LOGOUT</li>
                    </ul>
                </div>
                <div className="navRight">
                    <img className="navImg" src={propic} alt="profilePic"></img>
                    <i className="navSearchIcon fas fa-search"></i>
                </div>
            </div>
        </>
    );
}

export default NavBar;
