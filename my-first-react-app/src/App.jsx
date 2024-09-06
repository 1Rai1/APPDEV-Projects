import Footer from './Footer';
import Header from './Header';
import Body from './Body';   

export default function App(){
    return(
        <>
        <Header />
        <br />
        <Body />
        <br />
        <Body name = " Rai" food = " Pizza" isHealthy = {false} age = {100} />
        <Body name = " Rainier" food = " Spanish Bread" isHealthy = {true} age = {19} />
        <Body name = " Superman" food = " Vegan Burger" isHealthy = {true} age = {30} />
        <Body name = " Bruce Wayne" food = " Bats" isHealthy = {false} age = {35} />
        <Body name = " Amber Heard" food = " Delusions" isHealthy = {false} age = {25} />
        <Footer />
        </>
    )
}