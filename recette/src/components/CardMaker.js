import React from 'react'
import {Button, Card} from 'react-bootstrap'

function CardMaker({taskObj}) {
    return (
        <div>
            <span>
            <Card style={{ width: '100%', height: '10rem' }} align='center'>
            <Card.Body>
                <Card.Title>{taskObj.Name}</Card.Title>
                <Card.Text>{taskObj.Description}</Card.Text>
                <Button variant="outline-dark">Edit</Button>
            </Card.Body>
            </Card>
            </span>
        </div>
    )
}

export default CardMaker
