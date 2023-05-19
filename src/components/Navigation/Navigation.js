import { NavLinkHeader } from './Navigation.styled';
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/AuthOperation/auth.selector";
import { Suspense } from "react";
import UserMenu from "components/UserCreate/UserMenu/UserMenu";
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import s from './Navigation.module.css'

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>
        <header className={s.head}>
                {isLoggedIn ?<UserMenu/>:
            <>
            <NavLinkHeader to="/register">Register</NavLinkHeader>
            <NavLinkHeader to="/login">Login</NavLinkHeader>
            </>}
        </header>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        <ToastContainer />
        </>
    )
}
export default Navigation;
