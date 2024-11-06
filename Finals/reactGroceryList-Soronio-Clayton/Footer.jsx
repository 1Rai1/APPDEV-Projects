export default function Footer(){
    //stateless component - no hooks, no functions, no states return texts
    //functions comSponents 
    return(
        <footer>
            <hr />
            <hr />
            <p><center>&copy; {new Date().getFullYear()} Grocery List Website
            Website || Written by: Clayton Soronio</center></p>
        </footer>
    )
}