import React , {useState} from 'react'
import {Button, Card} from 'react-bootstrap'

function CardMaker({taskObj, index, deleteTask, updateListArray}) {
    const [modal, setModal] = useState(false);
    const handleDelete = () =>   {
        deleteTask(index)
    }

    return (
        <div>
            <Card style={{ width: '100%', height: '10rem' }} align='center'>
            <Card.Body>
                <Card.Title>{taskObj.Name}</Card.Title>
                <Card.Text>{taskObj.Description}</Card.Text>
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
