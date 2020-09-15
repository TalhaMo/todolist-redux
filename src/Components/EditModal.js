import React, { useState } from 'react';
import {connect,useDispatch} from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {editList} from '../Redux/Actions/todoActions'
const EditModal = (props) => {
  const {
    buttonLabel,
    className,todo,
  } = props;
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
  const [editText,setEditText]=useState(todo.text)
  const toggle = () => setModal(!modal);
  const editt=()=>{
    dispatch(editList({id:todo.id,text:editText}))
      toggle()
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
            <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default connect()(EditModal);