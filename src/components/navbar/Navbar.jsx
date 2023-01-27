import "./Navbar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlined from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlined from "@mui/icons-material/ListOutlined";
import avata from "../../image/avata.jpg"

const Navbar = () => {
  return (
   <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon"/>
          </div>
          <div className="item">
            <img
              src={avata}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Navbar;
