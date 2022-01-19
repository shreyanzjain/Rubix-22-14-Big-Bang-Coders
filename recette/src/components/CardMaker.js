import React from 'react'
import {Button, Card} from 'react-bootstrap'

function CardMaker({taskObj}) {
    return (
        <div>
            <Card style={{ width: '100%', height: '10rem' }} align='center'>
            <Card.Body>
                <Card.Title>{taskObj.Name}</Card.Title>
                <Card.Text>{taskObj.Description}</Card.Text>
            </Card.Body>
            <Card.Footer>
            <div>
                <span class='m-1'>
                <Button variant="outline-dark">Edit</Button>
                </span>
                <Button variant="outline-dark">Delete</Button>
            </div>
            </Card.Footer>
            </Card>
        </div>
    )
}

export default CardMaker
