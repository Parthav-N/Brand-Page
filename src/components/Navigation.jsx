const Navigation = () => {
    return (
        <nav className="container">
            <div className='logo'>
                <img src=".\images\nike.jpg" className='photo' alt="Nike Logo" />
            </div>
            <ul className='icons'>
                <li href="">Menu</li>
                <li href="">Location</li>
                <li href="">About</li>
                <li href="">Contact</li>
            </ul>
            <button className='login'>Login</button>
        </nav>
    )
}

export default Navigation;