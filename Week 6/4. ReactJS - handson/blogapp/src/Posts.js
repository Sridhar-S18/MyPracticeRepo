import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => console.error('Error loading posts:', error));
  };

    componentDidMount() {
    this.loadPosts();
    }

      render() {
    return (
      <div>
        <h2>All Blog Posts</h2>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }

    componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("An error occurred while rendering posts.");
    console.error("Error:", error, info);
  }
}

export default Posts;
