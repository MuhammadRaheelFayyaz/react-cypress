import { Button } from "./button"
import { useHistory, useLocation } from 'react-router-dom'
export const Navbar = () => {
    const router = useHistory()
    let { pathname } = useLocation();
    const goToPage=()=>{
        router.push("/")
    }
    return <div className="navbar">
        <div className="logo">
            <h3>{pathname === "/home" ? 'Home' : 'Sing in please'}</h3>
        </div>
        <div className="logout">
            {pathname !== "/" && <Button caption="Logout" data-cy="logout-btn" bgColor="#f2230c" onClick={goToPage} />}
        </div> 
    </div>
}