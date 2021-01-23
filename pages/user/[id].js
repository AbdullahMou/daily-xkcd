import MyLayout from '../../componenets/MyLayout'

export default function UserDetails(props){
    return(
        <MyLayout>
            <h2>{props.user.title} </h2>
            <img src={props.user.img}/>
        </MyLayout>
    )
}

export async function getServerSideProps(context){
    const id = context.query.id;
    const response = await fetch(`http://xkcd.com/${id}/info.0.json`);
    const jsonData  = await response.json();
    return {props: {user: jsonData}}
}
