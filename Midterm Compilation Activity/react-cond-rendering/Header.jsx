export default function Header(){
    //stateless component - no hooks, no functions, no states return texts
  return (
      <header>
          <h1><center>My Website</center></h1>
          <nav>
            <ul className="head">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <hr />  
      </header>
     
      
  )
}
