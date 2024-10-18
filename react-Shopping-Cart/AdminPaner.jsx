import React,{useState} from "react";
import Login from "./Login";
export default function AdminPanel(props){
    let accounts = props.accounts
    //devlogs as objects ot list
    const[devlogs, setDevlogs] = useState([])
    //functions to add Devlogs
    function addDevlog(){
        let devlog = {
            date:new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            title:document.getElementById("title").value,
            content:document.getElementById("content").value
        }
        setDevlogs(d => [...d, devlog])
        document.getElementById("title").value = ""
        doucument.getElementById("content").value = ""
    }
    //function to render accounts
    const renderAccounts = ()=> {
        return(
            accounts.map((account) =>
            {
                return(
                    <div>
                        <h2 key ={account.id}>{account.username}</h2>
                        <p>{account.role}</p>
                    </div>
                )
            })
        )
    }
    //function to render the devlog history
    const renderDevlogHistory = () => {
        return(
            devlogs.map((devlog) => {
                return(
                    <div>
                        <h2>{devlog.title}</h2>
                        <p>{devlog.date}</p>
                        <p>{devlog.content}</p>
                    </div>
                )
            })
        )
    }
    //conditional rendering
    if(props.isLoggedIn === false){
        return <Login />
    }else{
        return(
            <div>
                <h1>This is the admin Panel</h1>
                <p>This are the active accounts:</p>
                {renderAccounts()}
                <br />
                <hr />
                <h4>Admin Devlogs:</h4>
                Title: <input type="text" name="title" id="title"/>
                <br /><br />
                <textarea name="content" id="content" cols="50" rows="10"></textarea>
                <br />
                <button type="submit" onClick={addDevlog}>Submit</button>

                <h4>Devlog History:</h4>

                {renderDevlogHistory()}
            </div>
        )
    }

}
