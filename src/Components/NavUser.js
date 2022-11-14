import { Link } from "react-router-dom"

const NavUser=()=>{
    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/list'>List Users</Link></li>
            <li><Link to='/brahim'>Contacts</Link></li>
        </ul>
    )
}

export default NavUser