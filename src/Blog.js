import React,{useState , useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
const Blog = () => {
    const [blogs,setBlogs]=useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setBlogs(data);
          })
        }, 1000);
        Aos.init({duration:2000});
      }, [])
    return (
        <div>
           <h1 id="blgmhd" >Fitness Blogs</h1>
           <Link to='/home'><button>Back To Home Page</button></Link>
            { isPending && <div id="blghd">Loading...</div> }
            {
                blogs && blogs.map((blog)=>(
                    <div key={blog.id} className='blgbox' data-Aos="fade-up">
                        <h1 id="blgttl">{blog.tittle}</h1>
                            <p id="blgathr">Written by {blog.author}</p>
                            <p id="blgcont">{blog.content}</p>

                        </div>
                ))}
        </div>
    )
}

export default Blog
