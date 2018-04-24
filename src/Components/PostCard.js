import React, { Component } from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class PostCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://reacttranslation.local/wp-json/wp/v2/posts')
    .then(response => {
      this.setState({
        posts: response.data
      })
    })
  }

  render() {
    return (
      <div>
      {this.state.posts.map(post => {
        return (
          <Card style={{ width: '35%' }} key={post.id}>
          <CardMedia>
            <img src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'} alt='Some text' />
          </CardMedia>
          <CardTitle title={post.title.rendered} />
          <CardText>{renderHTML(post.content.rendered)}</CardText>
          </Card>
        )
      })}
      </div>
    )
  }
}

export default PostCard;
