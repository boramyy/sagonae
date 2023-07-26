import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

function Header(props) {
  const {title} = props;
  const {tokenClient} = useContext(AuthContext);
  
  return (
    <header>
      <h2>{title}</h2>
      <p style={{fontSize: '30pt'}}>{`${tokenClient}`}</p>

      <ul>
        <li><NavLink to="/login">login</NavLink></li>
        <li><NavLink to="/">main</NavLink></li>
        <li><NavLink to="/parttimers">parttimers</NavLink></li>
        <li><NavLink to="/parttimers/123">p123</NavLink></li>
      </ul>
    </header>
  )
}

export default Header