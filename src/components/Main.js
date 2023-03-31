import profileAvatar from "../images/profileAvatar.png";

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

    <img src={require('../profile avatar.png'.png)} alt='AI avatar representation of Nicola' />

    {/* <img src={require(“../cards/logo.png”)} className=“logo” alt=“logo” /> */}

        </body>
        </>
    )
}

export default Main;