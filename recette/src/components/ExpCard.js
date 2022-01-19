import React from 'react';
import {Button, Card} from 'react-bootstrap'

function ExpCard({taskObj, index, deleteTask}) {
    const handleDelete = () =>   {
        deleteTask(index)
    }
    if(taskObj.Month === 0 && taskObj.Week === 0) {
        if(taskObj.Days === '1' || taskObj.Days === '2') {
        return (<div>
        <Card style={{ width: '100%', height: '10rem' }} align='left'>
        <Card.Body>
            <Card.Title>{taskObj.Name}</Card.Title>
            <Card.Subtitle>{taskObj.Description}</Card.Subtitle>
            <Card.Text>Days: {taskObj.Days} | Weeks: {taskObj.Week} | Months: {taskObj.Month}</Card.Text>
        </Card.Body>
        <Card.Footer>
        <div>
            <Button variant="outline-dark float-right" onClick={handleDelete}>Delete</Button>
        </div>
        </Card.Footer>
        </Card> 
    </div>);
        }
    } else{
        return (<div>
        
    </div>);
    }
    
}

export default ExpCard;
