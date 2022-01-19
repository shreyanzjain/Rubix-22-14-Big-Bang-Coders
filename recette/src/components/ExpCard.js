import React from 'react';
import {Card, Button} from 'react-bootstrap'
function ExpCard({taskObj, index, deleteTask}) {

    const handleDelete = () =>   {
        deleteTask(index)
    }
    let day = parseInt(taskObj.Days);
    let week = parseInt(taskObj.Week);
    let month = parseInt(taskObj.Month);

    if(day < 7 && week === 0 && month === 0)    {
        return  (
            <div>
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
            </div>
        );
    } else  {
        return  (
            <div>
            </div>
        );
    }
}

export default ExpCard;
