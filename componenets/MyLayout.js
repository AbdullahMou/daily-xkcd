import Header from '../componenets/Header'

export default props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            color: red;
            padding: 100px;
            text-align: center;
            transition: 100ms ease-in background;
        `}</style>
    </div>
)
