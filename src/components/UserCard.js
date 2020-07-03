import React from 'react';
import { Card, CardBody } from 'reactstrap';

const UserCard = ({ user }) => {
  return (
    <Card className='text-center mt-3 mb-4'>
      <img src={user.avatar_url} className='img-thumbnail' alt='user avatar' />
      <CardBody>
        <div className='text-primary'>{user.name}</div>
        <div className='text-primary'>Location: {user.location}</div>
        <div className='text-info'>Bio: {user.bio}</div>
        <div className='text-primary'>Followers: {user.followers}</div>
        <div className='text-danger'>Available For Hire: {user.hireable ? 'YES' : 'NO'}</div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
