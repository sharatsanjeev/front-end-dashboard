import React from 'react';
import './Nav.css' 
import {Link, useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem('key');
    const navigate=useNavigate();

    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
      
<nav className='navbar' > 
{auth?<ul>
<li> <Link to="/">Product</Link></li>
<li> <Link to="/add">addProduct</Link></li>
<li> <Link to="/update">Update Product</Link></li>
<li> <Link to="/profile">Profile</Link></li>
<li> <Link onClick={logout} to="/SignUp">Log-Out{JSON.parse(auth).name}</Link></li>

</ul>
:
<ul className='navbar sign' >
    <li><Link to="/signup">SignUp</Link></li>
    <li><Link to="/Login">Login</Link> </li>
</ul>
}
</nav>

  )}

export default Nav;