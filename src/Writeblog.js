import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Writeblog = () => {
    const [tittle, setTittle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const addBlog = (e) => {
        e.preventDefault();
        const blog = { tittle, content, author };
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            alert('blog added successfully');
        })
    }
    return (
        <div className='wrtblg_main'>
            <form onSubmit={addBlog} class="blgfrm">
                <h1 id="blghd">Write A New Blog</h1>

                <label>Blog Tittle</label>
                <input type="text" required value={tittle} onChange={(e) => setTittle(e.target.value)} ></input>
                <div>
                    <label>Blog Content</label>
                </div>
                <textarea required value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <div>
                    <label>author name</label>
                </div>
                <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <button>ADD BLOG</button>
                <p id="sglg">Go back to <Link id="lg" to="/blogs">Blog page</Link></p>
                <p id="sglg">Go back to <Link id="lg" to="/home">Home Page</Link></p>
            </form>
        </div>
    )
}

export default Writeblog
