import { useState } from "react"
import Shop from "./Shop"
import AdminPanel from "./AdminPaner"

export default function Login() {
    // Items for the shop
    const items = [
        { id: 1, name: "Grapes", price: 50 },
        { id: 2, name: "Orange", price: 20 },
        { id: 3, name: "Pickles", price: 40 }
    ]

    // Credentials for accounts
    const accounts = [
        { id: 1, username: "customer", password: "1", role: "customer" },
        { id: 2, username: "admin", password: "2", role: "admin" },
        {id: 3, username: "Ranier", password: "3", role: "customer"}
    ]

    //usestates
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [role, setRole] = useState("")
    const [enteredUserName, setEnteredUserName] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")

    // Get username
    function getUserName(event) {
        setEnteredUserName(event.target.value)
    }

    // Get password
    function getPassword(event) {
        setEnteredPassword(event.target.value)
    }

    // Handle login
    function handleLogin() {
        accounts.map(account => {
            if (account.username === enteredUserName && account.password === enteredPassword) {
                setIsLoggedIn(true)
                setRole(account.role)
            }
        })
    }

    // Render login page
    function renderLogin() {
        return (
            <div>
                <h1>Login:</h1>
                Username: <input type="text" placeholder="Username" onChange={getUserName} /><br />
                Password: <input type="password" placeholder="Password" onChange={getPassword} /><br />
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }

    // Render shop
    function renderShop() {
        return <Shop isLoggedIn={isLoggedIn} items={items} />
    }

    // Render admin
    function renderAdmin() {
        return (
            <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts} />
        )
    }

    // Conditional rendering
    if (isLoggedIn === false) {
        return renderLogin()
    } else {
        if(role ==="admin"){
        return renderAdmin()
        }else{
            return renderShop()
        }


    }
}
