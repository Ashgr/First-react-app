import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div>
            <h2>SORRRY</h2>
            <p>404 ERROR PAGE NOT FOUND</p>
            <Link to = '/'>Back to the homepage</Link>
        </div>
        
     );
}
 
export default NotFound;