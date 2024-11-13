export default function Footer(){
    //stateless component - no hooks, no functions, no states return texts
    //functions comSponents 
    return(
        <footer>
            <hr />
            <p>&copy; {new Date().getFullYear()} My Quotes Generator
            Website || Written by: Clayton Soronio</p>
        </footer>
    )
}