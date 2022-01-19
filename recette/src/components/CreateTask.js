import React, {useState} from 'react'
import { Modal, Button} from 'react-bootstrap';

const CreateTask = ({show, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [days, setDays] = useState('0');
    const [week, setWeek] = useState('0');
    const [month, setMonth] = useState('0');

    const handleChange = (e) => {
        const {name, value} = e.target;

        if (name === 'taskName')    {
            setTaskName(value);
        }else if(name === 'description'){
            setDescription(value);
        }else if (name === 'days'){
            setDays(value);
        } else if (name === 'week'){
            setWeek(value);
        } else  {
            setMonth(value);
        }
    }

    const handleSave = () => {
        let taskObj = {};
        taskObj['Name'] = taskName;
        taskObj['Description'] = description;
        taskObj['Days'] = days;
        taskObj['Week'] = week;
        taskObj['Month'] = month;
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
                <div>
                <span>
                    <label>No. of days</label>
                    <input type='number' title='Days' className='form-control' value={days} name='days' onChange={handleChange}/>
                    <label>No of weeks</label>
                    <input type='number' title='Week' className='form-control' value={week} name='week' onChange={handleChange}/>
                    <label>No of months</label>
                    <input type='number' title='Month' className='form-control' value={month} name='month' onChange={handleChange}/>
                </span>
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
