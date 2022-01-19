import React from 'react'
import {Button, Card} from 'react-bootstrap'

function CardMaker({taskObj, index, deleteTask}) {
    const handleDelete = () =>   {
        deleteTask(index)
    }

    return (
        <div>
            <Card style={{ width: '100%', height: '10rem' }} align='center'>
            <Card.Body>
                <Card.Title>{taskObj.Name}</Card.Title>
                <Card.Subtitle>{taskObj.Description}</Card.Subtitle>
                <Card.Text>Days: {taskObj.Days} | Weeks: {taskObj.Week} | Months: {taskObj.Month}</Card.Text>
            </Card.Body>
            <Card.Footer>
            <div>
                <Button variant="outline-dark" onClick={handleDelete}>Delete</Button>
            </div>
            </Card.Footer>
            </Card>
        </div>
    )
}

export default CardMaker
