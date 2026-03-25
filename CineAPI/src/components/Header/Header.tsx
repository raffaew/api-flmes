import "./Header.scss";
import SelectCategory from "../SelectCategory/SelectCategory";

const Header = () => {
  return (
    <div className="header">
       <h1>Cine APP</h1>
      <div className="nav">
      <ul>
        <li><SelectCategory /></li>
      </ul>
      </div>
     
      
    </div>
  );
};

export default Header;
