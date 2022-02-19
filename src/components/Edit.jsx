import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { edit } from '../redux/action';
import { TiEdit } from "react-icons/ti";

const Edit = ({task}) => {
    const [text, setText] = useState(task.action)
    const dispatch = useDispatch()
    const handelSubmit = (e) => {
        e.preventDefault();
        const editedOne = {
          id: task.id,
          action: text,
          isDone: task.isDone,
        };
        dispatch(edit(editedOne));
      
        closeModal();
      };
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      
      const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <TiEdit onClick={openModal} className="edit-icon" />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button >Confirme</button>
        </form>
      </Modal>
    </div>
  )
}

export default Edit
