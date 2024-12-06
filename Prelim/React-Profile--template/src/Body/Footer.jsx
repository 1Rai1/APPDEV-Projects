//this is my footer component
import './index.css'
export default function Footer(){
    return(
        <footer>
            <p>
                &copy; {new Date().getFullYear()} My Profile || Written by: Clayton Soronio
            </p>
        </footer>
    )
}