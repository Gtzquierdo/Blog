import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="" alt=""/>
                <p>
                    Cillum veniam consequat cillum in irure anim est consequat deserunt anim Lorem. Consectetur aliquip consectetur esse esse cillum. Dolor veniam in Lorem proident. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Family</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fas fa-phone"></i>
                    <i className="sidebarIcon fas fa-envelope"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
