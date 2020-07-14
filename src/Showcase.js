import React from 'react';
import { NavLink } from 'react-router-dom';

const Showcase = () => {
    return (
        <section className="showcase">
        <div className="showcaseContent">
        <h1>Welcome to Student Blog</h1>
        <NavLink to="" className="buttonLighter">View Posts</NavLink>
        </div>
            
        </section>
    )
}

export default Showcase;
