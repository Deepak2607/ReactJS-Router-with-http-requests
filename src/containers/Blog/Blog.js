import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {

    render () {
        return (
                 <div className='Blog'>
                    <header>
                        <nav>
                        <ul>
                        <li><NavLink to='/'> Home </NavLink></li>
                        <li><NavLink to='/new-post'> New Post </NavLink></li>
                        </ul>
                        </nav>
                    </header>
            
                    <Switch>
                        <Route path="/" exact component={Posts} />
                        <Route path="/posts/:number" exact component={FullPost} />
                        <Route path="/new-post" exact component={NewPost} />
                    </Switch>
                </div>
        );
    }
}

export default Blog;

