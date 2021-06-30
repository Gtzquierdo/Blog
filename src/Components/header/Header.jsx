import './header.css';
import ocean from  '../../assets/ocean.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Our Family</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={ ocean }  alt="background"></img>
        </div>
    );
}

export default Header;
