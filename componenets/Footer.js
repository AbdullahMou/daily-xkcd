import styles from '../styles.module.css'
import Link from 'next/link'

function Footer(props){
    var arr =[]   ;
    for(let i = 0; i<10; i++) {arr.push(Math.floor(Math.random() * 2415) + 1)}

    return(
        <footer className={styles.footer}>
            <p key={props.users.num}>
                <Link href="/[id].js" as={`/${props.users.num}`}>
                    <a>{props.users.title}</a>
                </Link>
            </p>
            <ul>
                {arr.map( (ele) => {
                    return(
                    <li key={ele}>==>
                        <Link href="/[id].js" as={`/${ele}`}>
                            <a>{ele}</a>
                        </Link>
                    </li>
                    )})
                }
            </ul>
        </footer>
    )
}
export default Footer;
