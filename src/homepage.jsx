import { Link } from "react-router-dom"
function Homepage({bio}){
    return(
        <>
        <nav>
            <ul>
                <li>Home</li>
                <li><Link to="/about">About</Link></li>
                <li>Contact</li>    
            </ul>            
        </nav>
        <hr>
        </hr>
       
        <footer>
            <h2 align="center"> &copy;
                {new Date().getFullYear()}
                 <br />
                 {bio.name} and I am {bio.age} years old!</h2>
        </footer>
        </>
    )
}

export default Homepage