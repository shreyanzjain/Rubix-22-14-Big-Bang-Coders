import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap';

const CreateTask = ({show, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;

        if (name === 'taskName')    {
            setTaskName(value);
        }else{
            setDescription(value);
        }
    }

    const handleSave = () => {
        let taskObj = {};
        taskObj['Name'] = taskName;
        taskObj['Description'] = description;
        save(taskObj)
        toggle()
    }

    return (
        <div>
        <Modal show={show} onHide={toggle}>
            <Modal.Header closeButton>                
            <Modal.Title>Add Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' className='form-control' value={taskName} name='taskName' onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea rows='5' className='form-control' value={description} name='description' onChange={handleChange}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={toggle}>
                    Close
                </Button>
                <Button variant="outline-dark" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
       </Modal>
        </div>
    )
}

export default CreateTask
