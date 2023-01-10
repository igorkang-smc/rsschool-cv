import './Header.css';

function Header({logo}) {
    return (
        <header className='App-header'>
            <a className='App-header-link' href={'/'}>
                <img src={logo} className='App-logo' alt='logo'/>
                <h1>My Portfolio</h1></a>
        </header>
    );
}

export default Header;