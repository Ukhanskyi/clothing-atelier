import React from 'react'
import './styles.css'

export default class Home extends React.Component {
  constructor(posts) {
    super(posts);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('/posts.json')
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ posts: data }) });
  }

  render() {
    var posts = this.state.posts.map((post) => {
      return (
        <div key={post.id}>
          <hr></hr>
          <div className="alert alert-light">
            <h3> {post.title} </h3>
            <br></br>
            <p> {post.body} </p>

            <button className='btn btn-outline-primary'>
              Show post
            </button>
          </div>
        </div>
      )
    })
    return (
      <div className="content">
        <div className="container">
          <h2 className="row justify-content-center">News about us</h2>
          {posts}
        </div>
      </div>
    )
  }
}
