import React, { useState } from 'react';

export default function Todo() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    setInput('');
  };

  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const openDeleteModal = (id) => {
    setTodoToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoToDelete));
    setShowModal(false);
    setTodoToDelete(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setTodoToDelete(null);
  };

  const startEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const saveEdit = (id) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditText('');
  };

  // Styles
  const styles = {
    container: {
      maxWidth: '450px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#fefefe',
      borderRadius: '8px',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    inputGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    input: {
      flex: '1',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '6px',
      border: '1.5px solid #ccc',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#007BFF',
    },
    button: {
      padding: '10px 16px',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '6px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    todoItem: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      padding: '10px',
      borderRadius: '6px',
      marginBottom: '10px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    },
    todoText: (completed) => ({
      flex: '1',
      marginLeft: '12px',
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? '#777' : '#111',
      fontSize: '16px',
      userSelect: 'none',
    }),
    editInput: {
      flex: '1',
      padding: '8px',
      fontSize: '16px',
      borderRadius: '6px',
      border: '1.5px solid #ccc',
      marginRight: '10px',
    },
    smallButton: {
      marginLeft: '6px',
      padding: '6px 12px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '14px',
      transition: 'background-color 0.3s',
    },
    editBtn: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    deleteBtn: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
    saveBtn: {
      backgroundColor: '#007bff',
      color: 'white',
    },
    cancelBtn: {
      backgroundColor: '#6c757d',
      color: 'white',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalBox: {
      backgroundColor: 'white',
      padding: '25px 30px',
      borderRadius: '10px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
      maxWidth: '320px',
      textAlign: 'center',
      fontSize: '18px',
      color: '#333',
    },
    modalButtons: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
    },
    modalBtnYes: {
      padding: '8px 18px',
      backgroundColor: '#dc3545',
      border: 'none',
      borderRadius: '6px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    modalBtnNo: {
      padding: '8px 18px',
      backgroundColor: '#6c757d',
      border: 'none',
      borderRadius: '6px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Todo List</h1>

      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={handleChange}
          value={input}
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />
        <button
          style={styles.button}
          onClick={handleAdd}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
        >
          Add
        </button>
      </div>

      <ul style={{ paddingLeft: 0 }}>
        {todoList.map((item) => (
          <li key={item.id} style={styles.todoItem}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
              style={{ cursor: 'pointer' }}
            />

            {editId === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                  style={styles.editInput}
                  autoFocus
                />
                <button
                  style={{ ...styles.smallButton, ...styles.saveBtn }}
                  onClick={() => saveEdit(item.id)}
                >
                  Save
                </button>
                <button
                  style={{ ...styles.smallButton, ...styles.cancelBtn }}
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span style={styles.todoText(item.completed)}>{item.text}</span>
                <button
                  style={{ ...styles.smallButton, ...styles.editBtn }}
                  onClick={() => startEdit(item.id, item.text)}
                >
                  Edit
                </button>
                <button
                  style={{ ...styles.smallButton, ...styles.deleteBtn }}
                  onClick={() => openDeleteModal(item.id)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <p>Are you sure you want to delete?</p>
            <div style={styles.modalButtons}>
              <button
                style={styles.modalBtnYes}
                onClick={confirmDelete}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = '#b52a30')
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = '#dc3545')
                }
              >
                Yes
              </button>
              <button
                style={styles.modalBtnNo}
                onClick={cancelDelete}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = '#4a5258')
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = '#6c757d')
                }
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


