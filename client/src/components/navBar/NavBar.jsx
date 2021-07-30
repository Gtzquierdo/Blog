import './navbar.css';
// import propic from '../../assets/propic.png';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context/Context";

const NavBar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return ( 
        <div className="navbar">
            <div className="navLeft">
                <i className="navIcon fas fa-phone"></i>
                <i className="navIcon fas fa-envelope"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem"><Link className="link" to='/'>HOME</Link></li>
                    <li className="navListItem"><Link className="link" to='/about'>ABOUT</Link></li>
                    <li className="navListItem"><Link className="link" to='/contact'>CONTACT</Link></li>
                    <li className="navListItem"><Link className="link" to='/create'>CREATE</Link></li> {
                        user && <li className="navListItem">LOGOUT</li>
                    }
                </ul>
            </div>
            <div className="navRight">
            {
                user ? (
                    <Link className="link" to='/settings'>
                        <img className="navImg" src={PF+user.profilePic} alt="profilePic" />
                    </Link>
                ) : (
                    <ul className="navList">
                        <li className="navListItem">
                            <Link className="link" to='/login'>LOGIN</Link>
                            LOGIN
                        </li>
                        <li className="navListItem">
                            <Link className="link" to='/register'>REGISTER</Link>
                            REGISTER
                        </li>
                    </ul>
                )
            }
                
                <i className="navSearchIcon fas fa-search"></i>
            </div>
        </div>

    );
}

export default NavBar;
