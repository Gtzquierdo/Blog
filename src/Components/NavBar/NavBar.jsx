import './navbar.css';
import '../Images/propic.png';

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navLeft">
                    <i class="fas fa-phone"></i>
                    <i class="fas fa-envelope"></i>
                </div>
                <div className="navCenter">
                    <ul className="navList">
                        <li className="navListItem">HOME</li>
                        <li className="navListItem">ABOUT</li>
                        <li className="navListItem">CONTACT</li>
                        <li className="navListItem">WRITE</li>
                        <li className="navListItem">LOGOUT</li>
                    </ul>
                </div>
                <div className="navRight">
                    <img src="../Images/propic.png" alt="profilePic"></img>
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </>
    );
}

export default NavBar;
