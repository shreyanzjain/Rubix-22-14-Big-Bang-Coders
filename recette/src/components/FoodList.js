import React, {useState, useEffect} from 'react'
import {Button, Modal} from 'react-bootstrap';
import CreateTask from './CreateTask';
import CardMaker from './CardMaker';

function FoodList() {
    const [show, setShow] = useState(false);

    const toggle = () => {
      setShow(!show);
    }

    useEffect(() => {
      let arr = localStorage.getItem('taskList');
      let obj = JSON.parse(arr);
      if(obj) {
          let obj = JSON.parse(arr)
          setTaskList(obj)
      }
      }, [])
  
    const [taskList, setTaskList] = useState([])
  
    const saveTask = (taskObj) => {
  
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
    }

    return (
        <div>
            <div className ='mainHeader' align='center' id='666'>
                <h1 className='headingOne'>Your inventory.</h1>
                <Button variant='outline-dark' onClick={toggle}>Add Item</Button>
            </div>
            <div>
                <CreateTask toggle={toggle} show={show} save={saveTask}/>
            </div>
            <div className="task-container">
                {taskList && taskList.map((obj) => <CardMaker taskObj = {obj}/>)}
            </div>
            <div>
              <h1 className='recommend' id='343' align='center'>Recommended.</h1>
            </div>
       </div>
    )
}

export default FoodList
