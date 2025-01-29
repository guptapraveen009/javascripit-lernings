import "./header.css"



const Header = (props) =>{
  const {Logo}  = props
    return(
      <header className="header">
        <h1 className="logo">{Logo}</h1>

        <nav className="nav">
        <ul className="nav_items">
            <li className="nav_items"> About</li>
            <li className="nav_items">Team</li>
            <li className="nav_items">Contact</li>
        </ul>
      </nav>
      </header>
      
    );
}

export default Header;