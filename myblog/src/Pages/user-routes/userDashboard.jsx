import React from 'react';
import { Container } from 'reactstrap';
import AddPost from '../../Components/AddPost';

const userDashboard = () => {
  return (
    <div>
      <Container>
        <AddPost />
      </Container>
    </div>
  );
}

export default userDashboard;
