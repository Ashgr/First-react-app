import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    
    const [name, setName] = useState('');
    const [snippet, setDesc] = useState('');
    const [director, setDirector] = useState('');
    const [category, setCategory] = useState('Action');
    const [isLoading , setLoading] = useState(false);

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = { name, snippet, director,category };
        setLoading(true);
        fetch('http://localhost:8000/movies/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(movie)
        }).then(() => {
          console.log('new movie added');
          setLoading(false);  
          history.push('/');  
        })
        
      }
    return ( 
        <div className="create">
            <h2>Add a New Show</h2>
                <form  onSubmit={handleSubmit}>
                    <label>Show name:</label>
                    <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Show description:</label>
                    <textarea
                        required
                        value={snippet}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                    <label>Show Director:</label>
                    <textarea
                        required
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    ></textarea>
                    <label>Show Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                    <br></br>
                    {!isLoading && <button>Add Show</button>}
                    {isLoading && <button disabled>Addding Show...</button>}
                </form>
        </div>
     );
}
 
export default Create;