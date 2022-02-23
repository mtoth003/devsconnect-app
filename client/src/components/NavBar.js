import {NavLink} from "react-router-dom"
import styled from "styled-components"

function NavBar({setCurrentUser}) {

  const handleLogoutClick = () => {
    setCurrentUser(null);
    fetch("api/logout", { method: "DELETE" });
  }

  return (
    <div>
      <NavBarStyle>
        <NavLink to="/"><li>My Feed</li></NavLink>
        <NavLink to="/account"><li>My Account</li></NavLink>
        {/* <NavLink to="/favorites"><li>My Favorites</li></NavLink> */}
      </NavBarStyle>
      <LogoutStyle>
        <NavLink to="#" onClick={handleLogoutClick}><li>Logout</li></NavLink>
      </LogoutStyle>
    </div>
  )
}

const NavBarStyle = styled.div`
    
    a {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin: 10px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 15px;
        line-height: 25px;
        box-shadow: 7px 7px grey;
        font-weight: bold;
        background: white;
    }

    a:link {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
        color: black;
    }
    li:hover {
        box-shadow: 7px 7px #00FFFF;
    }
    
`

const LogoutStyle = styled.div `
  a {
        list-style-type: none;
        margin: 0;
        padding: 0;

    }

    li {
        margin: 10px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 15px;
        line-height: 25px;
        box-shadow: 7px 7px grey;
        font-weight: bold;
        background: red;
    }

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
        color: black;
    }

    li:hover {
        box-shadow: 7px 7px #00FFFF;
    }

`

export default NavBar