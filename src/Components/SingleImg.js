import React, { Component } from 'react';
import { singleImageRetrive } from '../Actions/imgSelection';
import { connect } from 'react-redux';

class SingleImage extends Component {

  componentDidMount() {
    this.props.singleImage("http://reacttranslation.local/wp-json/wp/v2/media");
  }

  render() {
    var { imgType } = this.props;
    return (
      <div>
        {this.props.imageData.map(function(image) {
            return (
              <div key={image.id}>
                <img
                src={image.source_url}
                alt={image.alt_text} />
              </div>
            )
        })}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    imageData: state.singleImage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    singleImage: (url) => dispatch(singleImageRetrive(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleImage);
