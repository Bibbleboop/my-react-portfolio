import profileAvatar from "../components/profileAvatar.png";

// export default function App() {
    // return <img src={profileAvatar}/>
// }
function Main(props) { 
    return (
        <>
        <main>
            <h1 className="main-header">{props.title}</h1>
            <p>
            Welcome to my React Portfolio. I will showcase all the new projects and projects along my web3 journey. It is currently work in progress
            </p>
        </main>
        <body>

    <img src="../components/profileAvatar.png"></img>
        </body>
        </>
    )
}

export default Main;