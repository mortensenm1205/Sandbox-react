import React, { Component } from 'react';
import renderHTML from 'react-render-html'
import { MainCardDiv, MainCard, CardImgMedia } from '../Styled/index';
import { CardTitle, CardText } from 'material-ui/Card';
import { connect } from 'react-redux';
import { postsFetchData } from '../Actions/posts';

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
    var { recent } = this.props;
    var { posts } = this.props;
    var listings = (recent) ?
      (posts.slice(0, 3).map(function(post) {
        return (
          <MainCard key={post.id}>
            <CardTitle title={post.title.rendered} />
            <CardImgMedia>
            {post.better_featured_image ?
              <img src={post.better_featured_image.source_url} alt={post.better_featured_image.alt_text} />
              :
              <img src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'} alt='placeholder'/>
            }
            </CardImgMedia>
            <CardText>
              {post.content.rendered.length > 50 ?
                renderHTML(post.content.rendered.slice(0, 49) + "...")
                :
                <a>See More</a>}
                <a>See More</a>
            </CardText>
          </MainCard>
        )
      }))
      :
      (posts.map(function(post) {
        return (
          <MainCard key={post.id}>
            <CardTitle title={post.title.rendered} />
            <CardImgMedia>
            {post.better_featured_image ?
              <img src={post.better_featured_image.source_url} alt={post.better_featured_image.alt_text} />
              :
              <img src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'} alt='placeholder'/>
            }
            </CardImgMedia>
            <CardText>{renderHTML(post.content.rendered)}</CardText>
          </MainCard>
        )
      }))
    return (
      <MainCardDiv>
        {listings}
      </MainCardDiv>
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
