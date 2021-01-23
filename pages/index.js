import styles from '../styles.module.css'
import Header from '../componenets/Header'
import Footer from '../componenets/Footer'
import MyLayout from '../componenets/MyLayout'
export default function Home(props) {
  return (
        <MyLayout>
            <h3>{props.users.title}</h3>
            <img src={props.users.img}/>
            <Footer users={props.users}/>
        </MyLayout>
  )
}

export async function getServerSideProps(){
    let id=Math.floor(Math.random() * 2415) + 1;
    const response = await fetch(`http://xkcd.com/${id}/info.0.json`);
    const jsonData  = await response.json();
    console.log(response)
    console.log(jsonData)
    return {props: {users: jsonData}}
}