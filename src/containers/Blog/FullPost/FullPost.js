import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import ReactLoading from 'react-loading';
import './FullPost.css';

class FullPost extends Component {
    
            constructor(){
            super();
            this.state={
                loadedPost:'',
                submitted: false
            }
            
            this.componentDidMount= ()=> { 
                console.log(this.props);
                if(this.props.match.params.number)
                {
                    if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.number))
                    {
                        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.number).
                        then(response => 
                             this.setState(
                            {loadedPost: response.data}
                        ));
                    }
                }
            }
            
            this.deletePostHandler=() =>{
                axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.number).
                then(response =>{
                    console.log(response);
                }
              )
                this.setState(
                {submitted: true}
                )
            }
            
        }
    
    render() {
        
        let redirect =null;
        if(this.state.submitted ===true)
            redirect= <Redirect to= '/'/>;
    
       
        let fullPost =<p className='FullPost'>Select any post</p>    
          
        if(! this.state.loadedPost)
        {
            fullPost= <ReactLoading style={{marginLeft:'630px',height:'100px',width:'100px'}} type='spin' />;
        }
        if(this.state.loadedPost)
        {
            fullPost=
            <div className="FullPost">
                {redirect}
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                </div>
            </div>
        }
        
        return fullPost;          
    }
}

export default FullPost;