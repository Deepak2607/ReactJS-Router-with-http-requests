import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component{
    
    constructor(){
    super();
    this.state={
        posts:[],
        selectedId: null
    }
      
    this.componentDidMount=() =>{
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            const posts= response.data.slice(0,4);
                this.setState(
                {posts: posts}
             );
       });    
    }
    
    this.postSelectedHandler=(id) =>{
        this.setState(
            {selectedId: id},
        )
    }           
}
    
    render(){
        return( 
            <section className="Posts">
            {this.state.posts.map(post =>
                <Post
                title={post.title}
                body={post.body}
                id={post.id}
                click={this.postSelectedHandler}
               />
            )}
            </section>
        );
        
    }
}

export default Posts;