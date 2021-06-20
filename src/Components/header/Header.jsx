import './header.css';
import '../../assets/ocean-1-732956.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://s2.qwant.com/thumbr/700x0/7/2/e03acd1506e0bb63d2aa13eeee638f4e1a3db93a31c7850826e23b78c14ab3/o-OCEAN-facebook.jpg?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1484781%2Fimages%2Fo-OCEAN-facebook.jpg&q=0&b=1&p=0&a=0" alt="background"></img>
        </div>
    );
}

export default Header;
