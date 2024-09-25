export default function Footer(){
    //stateless component - no hooks, no functions, no states return texts
    //functions comSponents 
    return(
        <footer>
            <hgr />
            <p>&copy; {new Date().getFullYear()} My Color Picker
            Website || Written by: Clayton Soronio</p>
        </footer>
    )
}