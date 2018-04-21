import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const Post_card = () => {
  return (
    <Card style={{ width: '25%' }}>
      <CardMedia >
        <img src={process.env.PUBLIC_URL + '/images/placeholder_blue.png'} alt='Post_card'/>
      </CardMedia>
      <CardTitle title="Post Title" subtitle="Post Subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  )
}

export default Post_card;
