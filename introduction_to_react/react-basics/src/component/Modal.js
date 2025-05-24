import React from "react";
export default function Modal({onClose, onConfirm}) {
    return (
      <div
        style={{
          border: '2px solid black',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: '0',
                left: '0',
          zIndex:1000,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
          }}
        >
          <span>Are You Sure?</span>
                <button onClick={onClose} style={{ marginRight: '1rem' }}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    );
}