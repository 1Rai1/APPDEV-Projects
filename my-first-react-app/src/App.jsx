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
        <Body name = " Rai" food = " Pizza" isHealthy = {false} age = {100} />
        <Body name = " Rai" food = " Pizza" isHealthy = {false} age = {100} />
        <Body name = " Rai" food = " Pizza" isHealthy = {false} age = {100} />
        <Body name = " Rai" food = " Pizza" isHealthy = {false} age = {100} />
        <Footer />
        </>
    )
}