
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' my-5 '>
            <div className='flex w-full gap-8 justify-around'>
                <NavLink to={'/'}>Home </NavLink>
                <NavLink to={'/addcoffee'}>Add Items </NavLink>
                <NavLink to={'/users'}>Users  </NavLink>
                <NavLink to={'/login'}>Login </NavLink>
                <NavLink to={'/register'}>Sign Up </NavLink>
            </div>
        </div>
    );
};

export default Navbar;