import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title"> USERS </span>
        <span className="counter"> 15072003 </span>
        <span className="link"> See all user </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          69%
        </div>
        <PersonOutlinedIcon className="icon"/>
      </div>
    </div>
  )
}

export default Widget;
