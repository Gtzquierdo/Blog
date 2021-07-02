import './setting.css';
import Sidebar from '../../Components/sidebar/Sidebar';

const Setting = () => {
    return (
        <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Update Your Account</span>
                
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProPic">
                    <img src="https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="pic" />
                    <label htmlFor="fileInput">
                        <i className="settingsProPicIcon far fa-user-circle"></i>
                    </label>
                    <input className="settingsProPicInput" type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Username" name="name"/>
                <label>Email</label>
                <input type="email" placeholder="email@emailaddress.com" name="email" />
                <label>Password</label>
                <input type="password"  placeholder="Password" name="password"/>
                <button className="settingsSubmit" type="submit">Update</button>
            </form>
        </div>
        <Sidebar />
        </div>
    );
}

export default Setting;
