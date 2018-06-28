import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';

const post = (props) =>{ 
      
    return(
        <Link to= {'/posts/'+props.id}>
            <div onClick={() =>props.click(props.id)} className="Post">
                <h1>{props.title}</h1>
                <p className="Author">Author</p>
            </div>
        </Link>
        );
   }

export default post;