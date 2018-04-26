import React, { Component } from 'react';
import renderHTML from 'react-render-html'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { connect } from 'react-redux';
import { postsFetchData } from '../Actions/index';

class PostCard extends Component {
  //For the moment how we will make this work for both computers, we will need
  //to use two different local accounts, ie two different api calls. Just for now
  //Use the one for the corresponding computer:
  //reacttranslation is for the Macbook
  //reacttranslationwork is for the work computer
  componentDidMount() {
    // this.props.fetchData('http://reacttranslation.local/wp-json/wp/v2/posts');
    this.props.fetchData('http://reacttranslationwork.local/wp-json/wp/v2/posts');
  }

  render() {

    return (
      <div>
      {this.props.posts.map(function(post) {
        return (
          <Card style={{ width: '35%' }} key={post.id}>
          <CardTitle title={post.title.rendered} />
          <CardMedia>
          {post.better_featured_image ?
            <img src={post.better_featured_image.source_url} alt={post.better_featured_image.alt_text} />
            :
            <img src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'} />
          }
          </CardMedia>
          <CardText>{renderHTML(post.content.rendered)}</CardText>
          </Card>
        )
      })}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(postsFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
