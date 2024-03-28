import './MainNavBar.css';

const MainNavBar = () => {
    return (
        <div className="navbar">
            <h1 className="logo-name">Elibaba</h1>
            <div className="logo-image">
                <img src="./img/Elibabalogo.png" alt="" />
            </div>
            <div className="actions">
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
    )
}

export default MainNavBar
