import React from 'react';
import {Card, ListGroup ,ListGroupItem} from 'react-bootstrap';


export const UserCard = ({user}) => {
    return (
        <div className="cardsContainer">
            <Card style={{ width: '25rem',backgroundColor:'rgb(95, 92, 124)' , marginBottom :'2rem'}}>
  <Card.Body >
    <Card.Title className="title">{user.company.name}</Card.Title>
    <Card.Text className='activities'>
        Activity: {user.company.bs}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem style={{backgroundColor:' rgb(176, 170, 231)'}}>Owner: {user.name}</ListGroupItem>
    <ListGroupItem style={{backgroundColor:' rgb(176, 170, 231)'}}>Website: {user.website}</ListGroupItem>
    <ListGroupItem style={{backgroundColor:' rgb(176, 170, 231)'}}>Phone: {user.phone}</ListGroupItem>
    <ListGroupItem style={{backgroundColor:' rgb(176, 170, 231)'}}>{user.company.catchPhrase}</ListGroupItem>
  </ListGroup>
</Card>
        </div>
       
    )
}
