import React, { Component } from 'react';
import { imagesRetrival } from '../Actions/imgSelection';
import { connect } from 'react-redux';

class SingleImage extends Component {

  componentDidMount() {
    // this.props.images("http://reacttranslation.local/wp-json/wp/v2/media");
    this.props.images("http://reacttranslationwork.local/wp-json/wp/v2/media");
  }

  render() {
    var { imgType } = this.props;
    return (
      <div>
        {this.props.imageData.map(function(image) {
          if(image.alt_text === imgType) {
            return (
              <div key={image.id}>
                <img
                src={image.source_url}
                alt={image.alt_text} />
              </div>
            )
          }
        })}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    imageData: state.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    images: (url) => dispatch(imagesRetrival(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleImage);
