import styles from '../styles.module.css'
import Link from 'next/link'

function Header(props){
    return(
        <header className={styles.header}>
            <nav>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <br></br>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </nav>
            <h1>Welcome to XKCD </h1>
        </header>
    )
}

export default Header;
