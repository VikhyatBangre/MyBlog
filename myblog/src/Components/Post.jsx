import React from 'react';
import { Button, Card, CardBody, CardText } from 'reactstrap';

function Post({title="This is default post title",content="This is default post content"}) {
  return (
    <Card className='mt-3'>
        <CardBody>
            <h1>{title}</h1>
            <CardText>{content}</CardText>
            <Button>Read more</Button>
        </CardBody>
    </Card>
  );
}

export default Post;