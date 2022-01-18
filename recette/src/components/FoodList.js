import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap';

function FoodList() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <div className ='mainHeader' align='center'>
                <h1 className='headingOne'>Recette</h1>
                <Button variant='primary' onClick={handleShow}>Add Item</Button>
                <div>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        <div className='form-group'>
                          <label>Name</label>
                          <input type='text' className='form-control'/>
                          <br></br>
                        </div>
                        <div class="form-group">
                          <input type="file" className="form-control-file" id="fileOne"/>
                        </div>
                      </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
            </div>
       </div>
    )
}

export default FoodList
