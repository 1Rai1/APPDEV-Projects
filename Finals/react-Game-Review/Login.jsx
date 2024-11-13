import { useState } from "react";
import Reviews from './Reviews'; 

export default function Login() {
    const account = [
        { username: "admin", password: "admin" },
        { username: "nerd", password: "nerd" }
    ]

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [enteredUser, setEnteredUser] = useState("");
    const [enteredPass, setEnteredPass] = useState("");

    function getUserName(event) {
        setEnteredUser(event.target.value);
    }
    function getPassword(event) {
        setEnteredPass(event.target.value);
    }
    function handleLogin() {
        const userAccount = account.find(
            acc => acc.username === enteredUser && acc.password === enteredPass
        );

        if (userAccount) {
            setIsLoggedIn(true);
        } else {
            alert("Invalid username or password");
        }
    }

    function renderReview() {
        return <Reviews />;
    }

    const renderLoginForm = () => {
        return (
            <div className="Login-Page">
                <h1>Welcome to Wormmmy's Reviews!</h1>
                <h4>Login to Continue:</h4>
                Username:
                <input type="text" placeholder="username" onChange={getUserName} />
                <br />
                <br />
                Password:
                <input type="password" placeholder="password" onChange={getPassword} />
                <br />
                <br />
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    };

    if (!isLoggedIn) {
        return renderLoginForm();
    } else {
        return renderReview();
    }
}
