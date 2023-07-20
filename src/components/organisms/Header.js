import { NavLink } from "react-router-dom";

function Header(props) {
  const { title } = props;
  
  return <header>
    <h1>{title}</h1>

    <NavLink to="/">main</NavLink>
    <br/>
    <NavLink to="/parttimers">parttimers</NavLink>
    <br/>
    <NavLink to="/parttimers/123">p123</NavLink>
  </header>
}

export default Header