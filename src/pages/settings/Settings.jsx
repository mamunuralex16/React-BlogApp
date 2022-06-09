/* eslint-disable jsx-a11y/img-redundant-alt */
import './settings.css';
import alex from '../../components/images/alex.jpg';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">LOGOUT</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
          <img 
              className="topImg"
                src={alex} alt="Loading: Please wait for Image" 
            />

            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Write Your UserName" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Mail Address" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            UPDATE
          </button>
        </form>
        <button className="LogOutBtn">LOGOUT</button>
      </div>
    </div>
  );
}
