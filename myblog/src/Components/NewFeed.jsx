import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import Post from './Post';

function NewFeed() {

    useEffect(()=>{
        //load all posts from server
        
    },[])


  return (
    <div className="container-fluid">
        <Row>
            <Col md={
                {
                    size:10,
                    offset:1
                }
            }>
                <Post />
            </Col>
        </Row>
    </div>
  );
}

export default NewFeed;
