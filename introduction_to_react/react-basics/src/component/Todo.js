import Modal from "./Modal"
import React, { useState } from "react"
export default function Todo({ data }) {

    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleConfirm = () => {
        setShowModal(false);
        alert('are you sure')
    }
    return (
      <div>
        <div
          style={{
            width: '250px',
            border: '2px solid black',
            padding: '1rem',
            marginRight: '1rem',
           
          }}
        >
          {' '}
          <span
            style={{ color: 'maroon', fontSize: '2rem', marginRight: '1rem' }}
          >
            {data}
          </span>
          <button style={{padding:'0.8rem', borderRadius:'1.5rem', backgroundColor:'maroon', border:'none', color:'white', fontSize:'1rem'}} onClick={handleDelete}> Delete</button>
            </div>
            {showModal && <Modal onClose={handleClose} onConfirm={handleConfirm}/>}
      </div>
    );
}



